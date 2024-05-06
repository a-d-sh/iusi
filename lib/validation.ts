import { z } from 'zod'

export const contactSchema = z.object({
	message: z.string().min(10),
	tell: z.number().min(9).max(12).int(),
	name: z.string().min(3),
})

export const courseSchema = z.object({
	title: z.string().min(3),
	description: z.string().min(10),
	learning: z.string(),
	requirements: z.string(),
	level: z.string(),
	language: z.string(),
	category: z.string(),
	oldPrice: z.string().min(0),
	currentPrice: z.string().min(0),
})

export const directionSchema = z.object({
	title: z.string(),
	titleru: z.string(),
	titleen: z.string(),
})

export const courseFieldsSchema = z.object({
	title: z.string().min(3),
	slug: z.string().min(3),
})

export const directionFieldsSchema = z.object({
	title: z.string().min(3),
	slug: z.string().min(3),
})

export const descriptionSchema = z.object({
	description: z.string().min(10),
})

export const informationSchema = z.object({
	learning: z.string(),
	requirements: z.string(),
	tags: z.string(),
})

export const selectFieldsSchema = z.object({
	level: z.string(),
	language: z.string(),
	category: z.string(),
})

export const priceSchema = z.object({
	oldPrice: z.string(),
	currentPrice: z.string(),
})

export const sectionSchema = z.object({
	title: z.string().min(3),
})

export const scienceSchema = z.object({
	title: z.string().min(3),
})

export const lessonSchema = z.object({
	title: z.string().min(3),
	videoUrl: z.string(),
	content: z.string().optional(),
	hours: z.string(),
	minutes: z.string(),
	seconds: z.string(),
	free: z.boolean().default(false).optional(),
})

export const bookSchema = z.object({
	title: z.string().min(3),
	url: z.string(),
	free: z.boolean().default(false).optional(),
})

export const profileSchema = z.object({
	bio: z.string().min(10).optional(),
	phone: z.string().optional(),
	job: z.string().min(3).optional(),
	website: z.string().url().optional(),
	linkedin: z.string().url().optional(),
	github: z.string().url().optional(),
	youtube: z.string().url().optional(),
})

export const reviewSchema = z.object({
	data: z.string(),
})

export const addressSchema = z.object({
	fullName: z.string(),
	address: z.string(),
	city: z.string(),
	zip: z.string(),
})

export const couponSchema = z.object({
	code: z.string().min(3),
})

export const basicInstructorSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	phone: z.string().min(7),
})

export const socialMediaSchema = z.object({
	youtube: z.string().url(),
	linkedin: z.string().url(),
	github: z.string().url(),
	website: z.string().url(),
})

export const bioSchema = z.object({
	job: z.string().min(3),
	bio: z.string().min(10),
})

export const prompSchema = z.object({
	prompt: z.string().min(4),
})

export const imageSchema = z.object({
	prompt: z.string().min(1, {
		message: 'Photo prompt is required',
	}),
	amount: z.string().min(1),
	resolution: z.string().min(1),
})
