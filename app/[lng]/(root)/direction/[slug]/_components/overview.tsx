'use client'

import { getDirectionReviews } from '@/actions/review.action'
import { getDirectionSciences } from '@/actions/science.action'
import { IDirection, IReview, IScience } from '@/app.types'
import { Accordion } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import { useEffect, useState } from 'react'
import ScienceList from './science-list'

function Overview(direction: IDirection) {
	const [isLoading, setIsLoading] = useState(true)
	const [sciences, setSciences] = useState<IScience[]>([])
	const [reviews, setReviews] = useState<IReview[]>([])

	const t = useTranslate()

	useEffect(() => {
		const getData = async () => {
			try {
				const [sciences, reviews] = await Promise.all([
					getDirectionSciences(direction._id),
					getDirectionReviews(direction._id, 6),
				])
				setSciences(sciences)
				setReviews(reviews)
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
			}
		}

		getData()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className='mt-6 rounded-md bg-gradient-to-t from-background to-secondary p-4 lg:p-6'>
				<h2 className='font-space-grotesk text-3xl font-bold'>
					{t('Fanlari va kitoblari')}
				</h2>
			</div>

			<div className='mt-8 rounded-md bg-gradient-to-b from-background to-secondary p-4 lg:p-6'>
				<Separator className='my-3' />
				{isLoading ? (
					<div className='mt-4 flex flex-col gap-1'></div>
				) : (
					<Accordion type='single' collapsible>
						{sciences.map(science => (
							<ScienceList key={science._id} {...science} />
						))}
					</Accordion>
				)}
			</div>
		</>
	)
}

export default Overview
