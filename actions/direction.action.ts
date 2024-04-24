'use server'

import Direction from '@/database/direction.model'
import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateDirection } from './types'

export const createDirection = async (
	data: ICreateDirection,
	clerkId: string
) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Direction.create({ ...data, instructor: user._id })
		revalidatePath('/en/instructor/my-courses')
	} catch (error) {
		throw new Error('Soething went wrong while creating course!')
	}
}
