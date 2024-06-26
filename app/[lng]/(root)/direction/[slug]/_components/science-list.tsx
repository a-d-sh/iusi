import { IScience } from '@/app.types'
import CustomImage from '@/components/shared/custom-image'
import { Card, CardContent } from '@/components/ui/card'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'

import useTranslate from '@/hooks/use-translate'
import BookList from './book-list'

function ScienceList(science: IScience) {
	const t = useTranslate()

	return (
		<Drawer>
			<DrawerTrigger>
				<Card className='group w-full'>
					<CardContent className='relative h-56 w-full'>
						<CustomImage src='/logo.png' alt={science.title} />
					</CardContent>
					<div className='my-4 flex flex-col space-y-2 px-2'>
						<Separator />
						<h2 className='line-clamp-2 font-space-grotesk text-2xl font-bold'>
							{science.title}
						</h2>
						<Separator />
						<p className='line-clamp-1 font-space-grotesk text-2xl font-bold'>
							{science.books.length} {t('books')}
						</p>
					</div>
				</Card>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>
						<div className='mt-2 border-l-2 border-l-gray-800 p-4'>
							<div className='mx-auto max-w-4xl'>
								<div className='flex flex-wrap justify-center gap-4'>
									{science.books.map(book => (
										<BookList key={book._id} {...book} />
									))}
								</div>
							</div>
						</div>
					</DrawerTitle>
				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose></DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default ScienceList
