'use client'

import { IScience } from '@/app.types'
import { Draggable } from '@hello-pangea/dnd'
import { Grip, Pencil } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	science: IScience
	index: number
}

function ScienceList({ index, science }: Props) {
	const pathname = usePathname()

	return (
		<Draggable draggableId={science._id} index={index}>
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
					<span>{science.title}</span>
					<div className='ml-auto flex items-center gap-x-2 pr-2'>
						<Link href={`${pathname}/${science._id}`}>
							<Pencil className='size-4 cursor-pointer transition hover:opacity-75' />
						</Link>
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default ScienceList
