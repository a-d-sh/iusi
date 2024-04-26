'use client'

import { updateDirection } from '@/actions/direction.action'
import { IDirection } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import useToggleEdit from '@/hooks/use-toggle-edit'
import { directionFieldsSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function DirectionFields(direction: IDirection) {
	const { state, onToggle } = useToggleEdit()

	return (
		<Card>
			<CardContent className='relative p-6'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Direction Title</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <Edit2 />}
					</Button>
				</div>
				<Separator className='my-3' />

				{state ? (
					<Forms direction={direction} onToggle={onToggle} />
				) : (
					<div className='flex flex-col space-y-2'>
						<div className='flex items-center gap-2'>
							<span className='font-space-grotesk font-bold text-muted-foreground'>
								Title:
							</span>
							<span className='font-medium'>{direction.title}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-space-grotesk font-bold text-muted-foreground'>
								Slug:
							</span>
							<span className='font-medium'>
								{direction.slug ?? 'Not configured'}
							</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default DirectionFields

interface FormsProps {
	direction: IDirection
	onToggle: () => void
}
function Forms({ direction, onToggle }: FormsProps) {
	const [isLoading, setIsLoading] = useState(false)

	const pathname = usePathname()

	const form = useForm<z.infer<typeof directionFieldsSchema>>({
		resolver: zodResolver(directionFieldsSchema),
		defaultValues: {
			title: direction.title,
			slug: direction.slug,
		},
	})

	const onSubmit = (values: z.infer<typeof directionFieldsSchema>) => {
		setIsLoading(true)
		const promise = updateDirection(direction._id, values, pathname)
			.then(() => onToggle())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
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
								<FormControl>
									<Input disabled={isLoading} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='slug'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input disabled={isLoading} {...field} />
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
