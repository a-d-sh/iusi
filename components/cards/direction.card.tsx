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
					<h2 className='line-clamp-1 font-space-grotesk text-2xl font-bold'>
						{direction?.title}
					</h2>
					<Separator />
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<div className='relative size-[40px]'>
								<CustomImage
									src={direction?.admin.picture}
									alt={direction?.admin.fullName}
									className='rounded-full'
								/>
							</div>
						</div>

						<div className='flex gap-2'></div>
					</div>
				</div>
			</Card>
		</Link>
	)
}

export default DirectionCard
