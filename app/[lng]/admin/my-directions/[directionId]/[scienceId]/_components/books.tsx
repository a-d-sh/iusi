'use client'

import { createBook, editBook, editBookPosition } from '@/actions/book.action'
import { IBookFields } from '@/actions/types'
import { IBook, IScience } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { editorConfig } from '@/constants'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { bookSchema } from '@/lib/validation'
import Image from '@/node_modules/next/image'
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd'
import { zodResolver } from '@hookform/resolvers/zod'
import { Editor } from '@tinymce/tinymce-react'
import { BadgePlus, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import BookList from './book-list'

interface Props {
	science: IScience
	books: IBook[]
}
function Books({ science, books }: Props) {
	const [isLoading, setIsLoading] = useState(false)
	const [isEdit, setIsEdit] = useState(false)
	const [currentBook, setCurrentBook] = useState<IBookFields | null>(null)
	const [bookId, setBookId] = useState('')

	const path = usePathname()
	const { onToggle, state } = useToggleEdit()

	const onAdd = async (book: IBookFields) => {
		setIsLoading(true)
		return createBook({ book, science: science._id, path })
			.then(() => onToggle())
			.finally(() => setIsLoading(false))
	}

	const onStartEdit = (book: IBook) => {
		setIsEdit(true)
		setBookId(book._id)
		setCurrentBook({
			content: book.content,
			hours: `${book.duration.hours}`,
			minutes: `${book.duration.minutes}`,
			seconds: `${book.duration.seconds}`,
			title: book.title,
			videoUrl: book.videoUrl,
			free: book.free,
		})
	}

	const onFinishEdit = () => {
		setIsEdit(false)
		setCurrentBook(null)
		setBookId('')
	}

	const onEdit = async (book: IBookFields) => {
		setIsLoading(true)
		return editBook(book, bookId, path)
			.then(() => onFinishEdit())
			.finally(() => setIsLoading(false))
	}

	const onReorder = (updateData: { _id: string; position: number }[]) => {
		setIsLoading(true)
		const promise = editBookPosition({ lists: updateData, path }).finally(() =>
			setIsLoading(false)
		)

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully reordered!',
			error: 'Something went wrong!',
		})
	}

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return null

		const items = Array.from(books)
		const [reorderedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderedItem)

		const startIndex = Math.min(result.source.index, result.destination.index)
		const endIndex = Math.max(result.source.index, result.destination.index)

		const updatedBooks = items.slice(startIndex, endIndex + 1)

		const bulkUpdatedData = updatedBooks.map(book => ({
			_id: book._id,
			position: items.findIndex(item => item._id === book._id),
		}))

		onReorder(bulkUpdatedData)
	}

	const [uploading, setUploading] = useState(false)
	const [selectedImage, setSelectedImage] = useState('')
	const [
		selectedFile,
		// setSelectedFile
	] = useState(null)

	const handleUpload = async () => {
		setUploading(true)
		try {
			if (!selectedFile) return
			const formData = new FormData()
			formData.append('file', selectedFile)
			// const { data } = await axios.post('/api/book', formData)

			const requestOptions = { method: 'POST', body: formData }

			const response = await fetch('/api/files', requestOptions)
			const result = await response.text()
			console.log(result)

			// console.log(data)
		} catch (error) {
			console.log('error.response?.data')
		}
		setUploading(false)
	}

	return (
		<Card>
			<CardContent className='relative p-6'>
				{isLoading && <FillLoading />}
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Manage chapters</span>
					{!isEdit && (
						<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
							{state ? <X /> : <BadgePlus />}
						</Button>
					)}
				</div>
				<Separator className='my-3' />

				<label>
					<input
						type='file'
						hidden
						onChange={({ target }) => {
							if (target.files) {
								const file = target.files[0]
								setSelectedImage(URL.createObjectURL(file))
								// setSelectedFile(file)
							}
						}}
					/>
					<div className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
						{selectedImage ? (
							<Image src={selectedImage} alt='' />
						) : (
							<span>Select file</span>
						)}
					</div>
				</label>
				<Button onClick={handleUpload} type='submit'>
					{uploading ? 'Uploading..' : 'Upload'}
				</Button>

				<Separator className='my-3' />

				{state ? (
					<Forms book={{} as IBookFields} handler={onAdd} />
				) : isEdit ? (
					<Forms
						book={currentBook as IBookFields}
						handler={onEdit}
						isEdit
						onCancel={onFinishEdit}
					/>
				) : (
					<>
						{!books.length ? (
							<p className='text-muted-foreground'>No books</p>
						) : (
							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable droppableId='books'>
									{provided => (
										<div {...provided.droppableProps} ref={provided.innerRef}>
											{books.map((book, index) => (
												<BookList
													key={book._id}
													book={book}
													index={index}
													onStartEdit={() => onStartEdit(book)}
												/>
											))}
										</div>
									)}
								</Droppable>
							</DragDropContext>
						)}
					</>
				)}
			</CardContent>
		</Card>
	)
}

export default Books

interface FormProps {
	book: IBookFields
	handler: (book: IBookFields) => Promise<void>
	isEdit?: boolean
	onCancel?: () => void
}
function Forms({ handler, book, isEdit = false, onCancel }: FormProps) {
	const { content, hours, minutes, seconds, title, videoUrl, free } = book

	const form = useForm<z.infer<typeof bookSchema>>({
		resolver: zodResolver(bookSchema),
		defaultValues: {
			title,
			videoUrl,
			hours: `${hours}`,
			minutes: `${minutes}`,
			seconds: `${seconds}`,
			content,
			free,
		},
	})

	const onSubmit = (values: z.infer<typeof bookSchema>) => {
		const promise = handler(values as IBookFields).finally(() => form.reset())

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully!',
			error: 'Something went wrong!',
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Title'
									className='bg-secondary'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='videoUrl'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									placeholder='Video URL'
									className='bg-secondary'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='content'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Editor
									apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
									init={editorConfig}
									onBlur={field.onBlur}
									initialValue={content}
									onEditorChange={content => field.onChange(content)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='grid grid-cols-3 gap-2'>
					<FormField
						control={form.control}
						name='hours'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Hours'
										className='bg-secondary'
										type='number'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='minutes'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Minutes'
										className='bg-secondary'
										type='number'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='seconds'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Seconds'
										className='bg-secondary'
										type='number'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='free'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className='flex items-center space-x-2'>
									<Checkbox
										onCheckedChange={field.onChange}
										checked={field.value}
									/>
									<label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
										Are you offering this book for free?
									</label>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='flex items-center gap-2'>
					<Button type='submit'>{isEdit ? 'Edit' : 'Add'}</Button>
					{isEdit && (
						<Button variant='destructive' type='button' onClick={onCancel}>
							Cancel
						</Button>
					)}
				</div>
			</form>
		</Form>
	)
}
