import { IScience } from '@/app.types'
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import useTranslate from '@/hooks/use-translate'
import { ChevronsUpDown } from 'lucide-react'
import BookList from './book-list'

function ScienceList(science: IScience) {
	const t = useTranslate()

	return (
		<>
			<AccordionItem value={science.title} className='mt-1 border-none'>
				<AccordionTrigger className='flex w-full items-center justify-between bg-primary p-4 hover:no-underline'>
					<div className='flex items-center gap-2'>
						<ChevronsUpDown strokeWidth={1.75} className='size-4' />
						<div className='text-left font-space-grotesk text-[14px] font-semibold'>
							{science.title}
						</div>
					</div>
					<div className='hidden items-center text-sm lg:flex'>
						<div>
							{science.books.length} {t('books')}
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className='mt-2 border-l-2 border-l-gray-800 p-4'>
						{science.books.map(book => (
							<BookList key={book._id} {...book} />
						))}
					</div>
				</AccordionContent>
			</AccordionItem>

			<Drawer>
				<DrawerTrigger>{science.title}</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>
							<div className='mt-2 border-l-2 border-l-gray-800 p-4'>
								{science.books.map(book => (
									<BookList key={book._id} {...book} />
								))}
							</div>
						</DrawerTitle>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose></DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default ScienceList
