'use client'

// import DirectionCard from '@/components/cards/direction.card'
// import { directions } from '@/constants/index'
import useTranslate from '@/hooks/use-translate'

function Directions() {
	const t = useTranslate()

	return (
		<div className='container mx-auto max-w-6xl py-12'>
			{/* <div className='flex flex-col space-y-1'>
				<h1 className='text-center font-space-grotesk text-3xl font-bold'>
					{t('topDirections')}
				</h1>
			</div>
			<div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
				{directions.map(direction => (
					<DirectionCard key={direction.title} {...direction} />
				))}
			</div> */}
		</div>
	)
}

export default Directions
