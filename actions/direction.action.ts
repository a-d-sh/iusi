'use server'

import { IDirection } from '@/app.types'
import Direction from '@/database/direction.model'
import Purchasedirection from '@/database/purchasedirection.model'
import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { GetDirectionsParams, ICreateDirection } from './types'

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
		const { clerkId, page = 1, pageSize = 3 } = params

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
