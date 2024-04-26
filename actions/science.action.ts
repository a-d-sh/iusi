'use server'

import Book from '@/database/book.model'
import Science from '@/database/science.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { IUpdateScience } from './types'

export const getSciences = async (direction: string) => {
	try {
		await connectToDatabase()
		return await Science.find({ direction }).sort({ position: 1 })
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const createScience = async (
	direction: string,
	title: string,
	path: string
) => {
	try {
		await connectToDatabase()
		const sciences = await Science.find({ direction })
		const position = sciences.length + 1
		await Science.create({ direction, title, position })
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const updateScience = async (params: IUpdateScience) => {
	try {
		await connectToDatabase()
		const { lists, path } = params
		for (const item of lists) {
			await Science.findByIdAndUpdate(item._id, { position: item.position })
		}
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getScienceById = async (id: string) => {
	try {
		await connectToDatabase()
		return await Science.findById(id)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const deleteScience = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		await Science.findByIdAndDelete(id)
		await Book.deleteMany({ science: id })
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const updateScienceTitle = async (
	id: string,
	title: string,
	path: string
) => {
	try {
		await connectToDatabase()
		await Science.findByIdAndUpdate(id, { title })
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getDirectionSciences = async (id: string) => {
	try {
		await connectToDatabase()

		const sciences = await Science.find({ direction: id })
			.sort({ position: 1 })
			.populate({
				path: 'books',
				options: { sort: { position: 1 } },
				model: Book,
			})

		return JSON.parse(JSON.stringify(sciences))
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}
