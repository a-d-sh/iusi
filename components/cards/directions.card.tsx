import { IDirection } from '@/types'
import Image from 'next/image'

function DirectionsCard(directions: IDirection) {
	return (
		<div>
			<div className='flex h-44 w-full items-center justify-center rounded-md bg-secondary'>
				<Image
					src={directions.icon}
					alt={directions.label}
					width={200}
					height={200}
				/>
			</div>
			<h2 className='text-center mt-2 line-clamp-2 font-space-grotesk text-lg'>
				{directions.label}
			</h2>
		</div>
	)
}

export default DirectionsCard
