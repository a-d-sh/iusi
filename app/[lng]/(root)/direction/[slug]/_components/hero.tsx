'use client'

import { getFreeBooks } from '@/actions/book.action'
import { IBook, IDirection } from '@/app.types'
import CustomImage from '@/components/shared/custom-image'
import FillLoading from '@/components/shared/fill-loading'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import { useState } from 'react'
import { PiStudentBold } from 'react-icons/pi'
import ReactStars from 'react-stars'
import { toast } from 'sonner'

function Hero(direction: IDirection) {
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const [books, setBooks] = useState<IBook[]>([])
	const [book, setBook] = useState<IBook | null>(null)

	const t = useTranslate()

	const onHandler = async () => {
		if (books.length > 0) return setOpen(true)

		setLoading(true)

		const promise = getFreeBooks(direction._id)
			.then(data => {
				if (data.length === 0) return toast.error(t('notFound'))
				setBooks(data)
				setBook(data[0])
				setOpen(true)
			})
			.finally(() => setLoading(false))

		toast.promise(promise, {
			loading: t('loading'),
			success: t('successfully'),
			error: t('error'),
		})
	}

	return (
		<>
			<h1 className='font-space-grotesk text-4xl font-bold'>
				{direction.title}
			</h1>

			<div className='mt-4 flex flex-wrap items-center gap-6'>
				<div className='flex items-center gap-2'>
					<Image
						width={50}
						height={50}
						alt={direction.admin.fullName}
						src={direction.admin.picture}
						className='rounded-full'
					/>
					<p className='font-space-grotesk font-bold'>
						{direction.admin.fullName}
					</p>
				</div>

				<div className='flex items-center gap-2 font-space-grotesk'>
					<p className='font-bold text-[#E59819]'>{direction.rating}</p>
					<ReactStars value={direction.rating} edit={false} color2='#E59819' />
					<p className='font-bold'>({direction.reviewCount})</p>
				</div>

				<div className='flex items-center gap-2'>
					<PiStudentBold className='size-6' />
					<p className='font-space-grotesk font-bold'>
						{direction.purchasedStudents} {t('students')}
					</p>
				</div>
			</div>

			<div className='relative h-96 w-full'>
				<CustomImage
					src={direction.previewImage}
					alt='direction'
					className='mt-4 rounded-md'
				/>
				{loading && <FillLoading />}
			</div>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className='custom-scrollbar max-h-full max-w-full overflow-y-auto md:max-w-4xl'>
					<h1 className='font-space-grotesk text-2xl font-bold'>
						{t('freeBooks')}
					</h1>
					<div className='flex flex-col'>
						{books.map(item => (
							<div
								key={item._id}
								className='flex cursor-pointer items-center justify-between gap-2 border-t p-4 transition-colors hover:bg-secondary'
								onClick={() => setBook(item)}
							>
								<div className='flex items-center gap-2'>
									<p className='font-space-grotesk font-bold'>{item.title}</p>
								</div>
							</div>
						))}
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Hero
