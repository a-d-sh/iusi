'use client'

import { createScience, updateScience } from '@/actions/science.action'
import { IDirection, IScience } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { scienceSchema } from '@/lib/validation'
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd'
import { zodResolver } from '@hookform/resolvers/zod'
import { BadgePlus, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import ScienceList from './science-list'

interface Props {
	direction: IDirection
	sciences: IScience[]
}

function Sciences({ direction, sciences }: Props) {
	const [isLoading, setIsLoading] = useState(false)
	const { state, onToggle } = useToggleEdit()
	const pathname = usePathname()

	const onReorder = (updateData: { _id: string; position: number }[]) => {
		setIsLoading(true)
		const promise = updateScience({
			lists: updateData,
			path: pathname,
		}).finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully reordered!',
			error: 'Something went wrong!',
		})
	}

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return null

		const items = Array.from(sciences)
		const [reorderedItem] = items.splice(result.source.index, 1)
		items.splice(result.destination.index, 0, reorderedItem)

		const startIndex = Math.min(result.source.index, result.destination.index)
		const endIndex = Math.max(result.source.index, result.destination.index)

		const updatedSciences = items.slice(startIndex, endIndex + 1)

		const bulkUpdatedData = updatedSciences.map(science => ({
			_id: science._id,
			position: items.findIndex(item => item._id === science._id),
		}))

		onReorder(bulkUpdatedData)
	}

	return (
		<Card>
			<CardContent className='relative p-6'>
				{isLoading && <FillLoading />}
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Sciences</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <BadgePlus />}
					</Button>
				</div>
				<Separator className='my-3' />

				{state ? (
					<Forms direction={direction} onToggle={onToggle} />
				) : (
					<>
						{!sciences.length ? (
							<p className='text-muted-foreground'>No sciences</p>
						) : (
							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable droppableId='sciences'>
									{provided => (
										<div {...provided.droppableProps} ref={provided.innerRef}>
											{sciences.map((science, index) => (
												<ScienceList
													key={science._id}
													science={science}
													index={index}
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

export default Sciences

interface FormsProps {
	direction: IDirection
	onToggle: () => void
}
function Forms({ direction, onToggle }: FormsProps) {
	const [isLoading, setIsLoading] = useState(false)

	const pathname = usePathname()

	const form = useForm<z.infer<typeof scienceSchema>>({
		resolver: zodResolver(scienceSchema),
		defaultValues: { title: '' },
	})

	const onSubmit = (values: z.infer<typeof scienceSchema>) => {
		setIsLoading(true)
		const promise = createScience(direction._id, values.title, pathname)
			.then(() => onToggle())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully created!',
			error: 'Something went wrong!',
		})
	}

	return (
		<>
			{isLoading && <FillLoading />}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Science title
									<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										disabled={isLoading}
										placeholder='e.g. Introduction to the direction'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' disabled={isLoading}>
						Save
					</Button>
				</form>
			</Form>
		</>
	)
}
