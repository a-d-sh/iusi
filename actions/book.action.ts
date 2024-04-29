'use server'

import { IBook } from '@/app.types'
import Book from '@/database/book.model'
import Science from '@/database/science.model'
import UserProgress from '@/database/user-progress.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { IBookFields, ICreateBook, IUpdatePosition } from './types'

export const getBooks = async (science: string) => {
	try {
		await connectToDatabase()
		return await Book.find({ science }).sort({ position: 1 })
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const createBook = async (params: ICreateBook) => {
	try {
		await connectToDatabase()
		const { book, science, path } = params

		const existScience = await Science.findById(science)
		const position = existScience.books.length

		const newBook = await Book.create({
			...book,
			position,
			science,
		})
		existScience.books.push(newBook._id)
		existScience.save()
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const deleteBook = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		const book = await Book.findById(id)
		const science = await Science.findById(book.science)
		science.books.pull(id)
		science.save()
		await Book.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const editBook = async (
	book: IBookFields,
	bookId: string,
	path: string
) => {
	try {
		await connectToDatabase()
		await Book.findByIdAndUpdate(bookId, { ...book })
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const editBookPosition = async (params: IUpdatePosition) => {
	try {
		await connectToDatabase()
		const { lists, path } = params
		for (const item of lists) {
			await Book.findByIdAndUpdate(item._id, { position: item.position })
		}

		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const completeBook = async (
	bookId: string,
	userId: string,
	path: string
) => {
	try {
		await connectToDatabase()
		const userProgress = await UserProgress.findOne({ userId, bookId })
		if (userProgress) {
			userProgress.isCompleted = true
			await userProgress.save()
		} else {
			const newUserProgress = new UserProgress({
				userId,
				bookId,
				isCompleted: true,
			})
			const book = await Book.findById(bookId)
			book.userProgress.push(newUserProgress._id)
			await book.save()
			await newUserProgress.save()
		}

		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const uncompleteBook = async (bookId: string, path: string) => {
	try {
		await connectToDatabase()
		await UserProgress.findOneAndDelete({ bookId })

		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getBook = async (id: string) => {
	try {
		await connectToDatabase()
		return await Book.findById(id).select('title url')
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getNextBook = async (bookId: string, directionId: string) => {
	try {
		await connectToDatabase()
		const sciences = await Science.find({ direction: directionId }).populate({
			path: 'books',
			options: { sort: { position: 1 } },
			model: Book,
		})

		const books: IBook[] = sciences.map(science => science.books).flat()

		const bookIndex = books.findIndex(item => item._id.toString() === bookId)

		if (bookIndex === books.length - 1) {
			return null
		}

		const nextBook = books[bookIndex + 1]

		const science = await Science.findOne({ books: nextBook._id })

		return {
			bookId: nextBook._id.toString(),
			scienceId: science._id.toString(),
		}
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getLastBook = async (clerkId: string, directionId: string) => {
	try {
		await connectToDatabase()

		const sciences = await Science.find({ direction: directionId })
			.select('books')
			.sort({ position: 1 })
			.populate({
				path: 'books',
				model: Book,
				select: 'userProgress',
				options: { sort: { position: 1 } },
			})

		const books: IBook[] = sciences.map(science => science.books).flat()

		const userProgress = await UserProgress.find({
			userId: clerkId,
			bookId: { $in: books.map(book => book._id) },
			isCompleted: true,
		}).sort({ createdAt: -1 })

		const lastBook = userProgress[userProgress.length - 1]

		if (!lastBook) {
			return {
				scienceId: sciences[0]._id.toString(),
				bookId: sciences[0].books[0]._id.toString(),
			}
		}

		const science = await Science.findOne({ books: lastBook.bookId })

		return {
			bookId: lastBook.bookId.toString(),
			scienceId: science._id.toString(),
		}
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}

export const getFreeBooks = async (directionId: string) => {
	try {
		await connectToDatabase()
		const sciences = await Science.find({ direction: directionId }).populate({
			path: 'books',
			model: Book,
			select: 'title url duration',
			match: { free: true },
		})

		const books = sciences.map(science => science.books).flat()

		return JSON.parse(JSON.stringify(books))
	} catch (error) {
		throw new Error('Something went wrong!')
	}
}
