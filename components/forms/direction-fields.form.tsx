'use client'

import { createDirection } from '@/actions/direction.action'
import { storage } from '@/lib/firebase'
import { directionSchema } from '@/lib/validation'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { ImageDown } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Dialog, DialogContent } from '../ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

function DirectionFieldsForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [previewImage, setPreviewImage] = useState('')
	const [open, setOpen] = useState(false)

	const router = useRouter()
	const { user } = useUser()

	const form = useForm<z.infer<typeof directionSchema>>({
		resolver: zodResolver(directionSchema),
		defaultValues: defaultVal,
	})

	function onUpload(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files
		if (!files) return null
		const file = files[0]

		const reader = new FileReader()

		reader.readAsDataURL(file)
		reader.onload = e => {
			const refs = ref(storage, `/praktikum/direction/${uuidv4()}`)
			const result = e.target?.result as string
			const promise = uploadString(refs, result, 'data_url').then(() => {
				getDownloadURL(refs).then(url => setPreviewImage(url))
			})

			toast.promise(promise, {
				loading: 'Uploading...',
				success: 'Successfully uploaded!',
				error: 'Something went wrong!',
			})
		}
	}

	function onSubmit(values: z.infer<typeof directionSchema>) {
		if (!previewImage) {
			return toast.error('Please upload a preview image')
		}
		setIsLoading(true)
		const promise = createDirection(
			{
				...values,
				previewImage,
			},
			user?.id as string
		)
			.then(() => {
				form.reset()
				router.push('/en/instructor/create-direction')
			})
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully created!',
			error: 'Something went wrong!',
		})
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Direction title Uz<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='Yo`nalish nomi Uz'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='titleru'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Direction title Ru<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='Yo`nalish nomi Ru'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='titleen'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Direction title En<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='Yo`nalish nomi En'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='grid grid-cols-3 gap-4'>
						<FormItem>
							<FormLabel>
								Preview image<span className='text-red-500'>*</span>
							</FormLabel>
							<Input
								className='bg-secondary'
								type='file'
								disabled={isLoading}
								onChange={onUpload}
							/>
						</FormItem>
					</div>

					<div className='flex justify-end gap-4'>
						<Button
							type='button'
							variant={'destructive'}
							onClick={() => form.reset()}
							disabled={isLoading}
						>
							Clear
						</Button>
						<Button type='submit' disabled={isLoading}>
							Submit
						</Button>
						{previewImage && (
							<Button
								type='button'
								variant={'outline'}
								onClick={() => setOpen(true)}
							>
								<span>Image</span>
								<ImageDown className='ml-2 size-4' />
							</Button>
						)}
					</div>
				</form>
			</Form>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<div className='relative h-72'>
						<Image
							src={previewImage}
							alt='preview-image'
							fill
							className='object-cover'
						/>
					</div>
					<Button
						className='w-fit'
						variant={'destructive'}
						onClick={() => {
							setPreviewImage('')
							setOpen(false)
						}}
					>
						Remove
					</Button>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default DirectionFieldsForm

const defaultVal = {
	title: '',
	titleru: '',
	titleen: '',
}
