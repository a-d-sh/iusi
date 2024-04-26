import { deleteBook } from '@/actions/book.action'
import { IBook } from '@/app.types'
import { Draggable } from '@hello-pangea/dnd'
import { Grip, Pencil, Trash2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
	book: IBook
	index: number
	onStartEdit: () => void
}
function BookList({ index, book, onStartEdit }: Props) {
	const pathname = usePathname()

	const onDelete = () => {
		const isConfimed = confirm('Are you sure you want to delete this book?')
		if (isConfimed) {
			const promise = deleteBook(book._id, pathname)

			toast.promise(promise, {
				loading: 'Loading...',
				success: 'Successfully deleted!',
				error: 'Something went wrong!',
			})
		}
	}

	return (
		<Draggable draggableId={book._id} index={index}>
			{provided => (
				<div
					className='mb-4 flex items-center gap-x-2 rounded-md border bg-secondary text-sm'
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div
						className='rounded-l-md border-r border-r-background bg-background/50 px-2 py-3 transition hover:bg-background/80'
						{...provided.dragHandleProps}
					>
						<Grip className='size-5' />
					</div>
					<span>{book.title}</span>
					<div className='ml-auto flex items-center gap-x-2 pr-2'>
						<Pencil
							className='size-4 cursor-pointer transition hover:opacity-75'
							onClick={onStartEdit}
						/>
						<Trash2
							className='size-4 cursor-pointer transition hover:opacity-75'
							onClick={onDelete}
						/>
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default BookList
