import { IBook } from '@/app.types'
import Link from 'next/link'

function BookList(book: IBook) {
	return (
		<div
			className='flex items-center justify-between py-2 hover:opacity-75'
			key={book._id}
			role='button'
		>
			<Link href={book.url}>
				<div className='flex items-center gap-2'>
					<p>{book.title}</p>
				</div>
			</Link>
		</div>
	)
}

export default BookList
