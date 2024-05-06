'use server'

import { IBook, IDirection } from '@/app.types'
import Book from '@/database/book.model'
import Direction from '@/database/direction.model'
import Purchasedirection from '@/database/purchasedirection.model'
import Review from '@/database/review.model'
import Science from '@/database/science.model'
import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { FilterQuery } from 'mongoose'
import { revalidatePath } from 'next/cache'
import { cache } from 'react'
import {
	GetAllDirectionsParams,
	GetDirectionsParams,
	ICreateDirection,
} from './types'

export const createDirection = async (
	data: ICreateDirection,
	clerkId: string
) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Direction.create({ ...data, admin: user._id })
		revalidatePath('/en/admin/my-directions')
	} catch (error) {
		throw new Error('Something went wrong while creating direction!')
	}
}

export const getDirections = async (params: GetDirectionsParams) => {
	try {
		await connectToDatabase()
		const { clerkId, page = 1, pageSize = 20 } = params

		const skipAmount = (page - 1) * pageSize

		const user = await User.findOne({ clerkId })
		const { _id } = user
		const directions = await Direction.find({ admin: _id })
			.skip(skipAmount)
			.limit(pageSize)
			.populate({
				path: 'admin',
				select: 'fullName picture clerkId',
				model: User,
			})

		const totalDirections = await Direction.find({
			admin: _id,
		}).countDocuments()
		const isNext = totalDirections > skipAmount + directions.length

		const allDirections = await Direction.find({ admin: _id })
			.select('purchases currentPrice')
			.populate({
				path: 'purchases',
				model: Purchasedirection,
				select: 'direction',
				populate: {
					path: 'direction',
					model: Direction,
					select: 'currentPrice',
				},
			})

		const totalStudents = allDirections
			.map(c => c.purchases.length)
			.reduce((a, b) => a + b, 0)

		const totalEearnings = allDirections
			.map(c => c.purchases)
			.flat()
			.map(p => p.direction.currentPrice)
			.reduce((a, b) => a + b, 0)

		return {
			directions,
			isNext,
			totalDirections,
			totalEearnings,
			totalStudents,
		}
	} catch (error) {
		throw new Error('Soething went wrong while getting direction!')
	}
}

export const getDirectionById = async (id: string) => {
	try {
		await connectToDatabase()
		const direction = await Direction.findById(id)
		return direction as IDirection
	} catch (error) {
		throw new Error('Soething went wrong while getting direction!')
	}
}

export const updateDirection = async (
	id: string,
	updateData: Partial<IDirection>,
	path: string
) => {
	try {
		await connectToDatabase()
		await Direction.findByIdAndUpdate(id, updateData)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while updating Direction status!')
	}
}

export const deleteDirection = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		await Direction.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while deleting direction!')
	}
}

// Landing uchun Kutubxona tizimi
export const getAllDirections = async (params: GetAllDirectionsParams) => {
	try {
		await connectToDatabase()
		const { searchQuery, filter, page = 1, pageSize = 20 } = params

		const skipAmount = (page - 1) * pageSize

		const query: FilterQuery<typeof Direction> = {}

		if (searchQuery) {
			query.$or = [{ title: { $regex: new RegExp(searchQuery, 'i') } }]
		}

		let sortOptions = {}

		switch (filter) {
			case 'newest':
				sortOptions = { createdAt: -1 }
				break
			case 'popular':
				sortOptions = { students: -1 }
				break
			case 'lowest-price':
				sortOptions = { currentPrice: 1 }
				break
			case 'highest-price':
				sortOptions = { currentPrice: -1 }
				break
			case 'english':
				query.language = 'english'
				break
			case 'uzbek':
				query.language = 'uzbek'
				break
			case 'russian':
				query.language = 'russian'
				break
			case 'turkish':
				query.language = 'turkish'
				break
			case 'beginner':
				query.level = 'beginner'
				break
			case 'intermediate':
				query.level = 'intermediate'
				break
			case 'advanced':
				query.level = 'advanced'
				break
			default:
				break
		}

		const directions = await Direction.find(query)
			.select('previewImage title slug _id admin')
			.populate({
				path: 'admin',
				select: 'fullName picture clerkId',
				model: User,
			})
			.skip(skipAmount)
			.limit(pageSize)
			.sort(sortOptions)

		const totalDirections = await Direction.countDocuments(query)
		const isNext = totalDirections > skipAmount + directions.length

		return { directions, isNext, totalDirections }
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getDetailedDirection = cache(async (id: string) => {
	try {
		await connectToDatabase()

		const direction = await Direction.findById(id)
			.select('title previewImage tags')
			.populate({
				path: 'admin',
				select: 'fullName picture clerkId',
				model: User,
			})

		const sciences = await Science.find({ direction: id }).populate({
			path: 'books',
			model: Book,
		})

		const totalBooks: IBook[] = sciences.map(science => science.books).flat()

		const reviews = await Review.find({ direction: id, isFlag: false }).select(
			'rating'
		)

		const rating = reviews.reduce((total, review) => total + review.rating, 0)

		const purchasedStudents = await Purchasedirection.find({
			course: id,
		}).countDocuments()

		const calcRating = (rating / reviews.length).toFixed(1)

		const data = {
			...direction._doc,
			totalBooks: totalBooks.length,
			totalSciences: sciences.length,
			rating: calcRating === 'NaN' ? 0 : calcRating,
			reviewCount: reviews.length,
			purchasedStudents,
		}

		return data
	} catch (error) {
		throw new Error('Something went wrong while getting detailed course!')
	}
})

export const getFeaturedDirections = cache(async () => {
	try {
		await connectToDatabase()
		const directions = await Direction.find({ published: true })
			.limit(6)
			.sort({ createdAt: -1 })
			.select('previewImage title slug admin')
			.populate({
				path: 'admin',
				select: 'fullName picture clerkId',
				model: User,
			})

		return directions
	} catch (error) {
		throw new Error('Something went wrong while getting featured directions!')
	}
})

export const getIsPurchase = async (clerkId: string, directionId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const isPurchased = await Purchasedirection.findOne({
			user: user._id,
			direction: directionId,
		})

		return !!isPurchased
	} catch (error) {
		throw new Error('Something went wrong while getting purchased directions!')
	}
}
