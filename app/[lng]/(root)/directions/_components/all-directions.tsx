'use client'

import { IDirection } from '@/app.types'
import DirectionCard from '@/components/cards/direction.card'
import NoResult from '@/components/shared/no-result'
import Pagination from '@/components/shared/pagination'
import useTranslate from '@/hooks/use-translate'
import { useSearchParams } from 'next/navigation'

interface Props {
	result: {
		directions: IDirection[]
		isNext: boolean
		totalDirections: number
	}
}

function AllDirections({ result }: Props) {
	const t = useTranslate()
	const searchParams = useSearchParams()

	const page = searchParams.get('page')

	const { directions, isNext, totalDirections } = result

	return (
		<div className='container mx-auto mt-12 max-w-6xl'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:space-y-2'>
				<h2 className='max-md:self-end'>
					{t('Barcha yo`nalishlar')}{' '}
					<span className='font-space-grotesk font-bold'>
						{totalDirections}
					</span>{' '}
					{t('result2')}
				</h2>
			</div>

			<div className='mt-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{directions?.map((direction, index) => (
					<DirectionCard key={index} {...direction} />
				))}
			</div>

			{directions.length === 0 && (
				<NoResult
					title={t('noDirections')}
					description={t('noDirectionDescription')}
				/>
			)}

			<div className='mt-10'>
				<Pagination pageNumber={page ? +page : 1} isNext={isNext} />
			</div>
		</div>
	)
}

export default AllDirections
