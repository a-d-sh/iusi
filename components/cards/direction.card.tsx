import { IDirection } from '@/app.types'
import Link from 'next/link'
import CustomImage from '../shared/custom-image'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'

function DirectionCard(direction: IDirection) {
	return (
		<Link href={`/direction/${direction?._id}`}>
			<Card className='group w-full'>
				<CardContent className='relative h-56 w-full'>
					<CustomImage src={direction?.previewImage} alt={direction?.title} />
				</CardContent>
				<div className='my-4 flex flex-col space-y-2 px-2'>
					<Separator />
					<h2 className='line-clamp-1 font-space-grotesk text-2xl font-bold'>
						{direction?.title}
					</h2>
				</div>
			</Card>
		</Link>
	)
}

export default DirectionCard
