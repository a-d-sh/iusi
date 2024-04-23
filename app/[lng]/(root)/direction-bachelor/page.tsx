'use client'

import DirectionsCard from '@/components/cards/directions.card'
import TopBar from '@/components/shared/top-bar'
import { directions } from '@/constants'
import useTranslate from '@/hooks/use-translate'

function Page() {
	const t = useTranslate()

	return (
		<>
			<TopBar label='Bakalavriat' />
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
		</>
	)
}

export default Page
