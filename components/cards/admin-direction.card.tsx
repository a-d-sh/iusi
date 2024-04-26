import { IDirection } from '@/app.types'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
// import { IDirection } from '@/types/index'

interface Props {
	direction: IDirection
}

function AdminDirectionCard({ direction }: Props) {
	return (
		<Link href={`/en/admin/my-directions/${direction._id}`}>
			<div className='flex flex-col space-y-2 rounded-md bg-background p-2'>
				<div className='relative h-52 w-full'>
					<Image
						src={direction.previewImage}
						alt={direction.title}
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='flex items-center justify-between px-2'>
					<h1 className='font-space-grotesk text-2xl font-bold'>
						{direction.title}
					</h1>
					<Badge variant={direction.published ? 'default' : 'destructive'}>
						{direction.published ? 'Published' : 'Draft'}
					</Badge>
				</div>
			</div>
		</Link>
	)
}

export default AdminDirectionCard
