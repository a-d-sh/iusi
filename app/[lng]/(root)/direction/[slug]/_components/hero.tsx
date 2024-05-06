'use client'

import { IBook, IDirection } from '@/app.types'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import useTranslate from '@/hooks/use-translate'
import { useState } from 'react'

function Hero(direction: IDirection) {
	const [open, setOpen] = useState(false)
	const [books] = useState<IBook[]>([])

	const t = useTranslate()

	return (
		<>
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
