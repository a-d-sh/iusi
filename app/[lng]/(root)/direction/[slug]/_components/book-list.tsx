import { IBook } from '@/app.types'
import CustomImage from '@/components/shared/custom-image'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

function BookList(book: IBook) {
	return (
		<div
			className='flex-shrink-0 flex-grow-0 w-full sm:w-1/2 lg:w-1/6'
			role='button'
		>
			<Link href={book.url} passHref>
				<Card className='group w-full'>
					<CardContent className='relative h-56 w-full'>
						<CustomImage src='/libruary/pdf.png' alt={book.title} />
					</CardContent>
					<div className='my-4 flex flex-col space-y-2 px-2'>
						<Separator />
						<p className='line-clamp-5 md:line-clamp-6 font-space-grotesk'>
							{book.title}
						</p>
					</div>
				</Card>
			</Link>
		</div>
	)
}

export default BookList
