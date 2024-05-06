import { IBook } from '@/app.types'

function BookList(book: IBook) {
	return (
		<div
			className='flex items-center justify-between py-2 hover:opacity-75'
			key={book._id}
			role='button'
		>
			<div className='flex items-center gap-2'>
				<p>{book.title}</p>
			</div>
		</div>
	)
}

export default BookList
