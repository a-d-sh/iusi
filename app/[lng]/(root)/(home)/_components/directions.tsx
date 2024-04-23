'use client'

import DirectionsCard from '@/components/cards/directions.card'
import { directions } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import Link from 'next/link'

function Directions() {
	const t = useTranslate()

	return (
		<>
			<Link href='/'>
				<div className='container mx-auto max-w-6xl py-12'>
					<div className='flex flex-col space-y-1'>
						<h1 className='text-center font-space-grotesk text-3xl font-bold'>
							{t('topDirections')}
						</h1>
					</div>

					<div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
						{directions.map(direction => (
							<DirectionsCard key={direction.label} {...direction} />
						))}
					</div>
				</div>
			</Link>
		</>
	)
}

export default Directions
