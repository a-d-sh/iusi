'use client'

import { getDirectionReviews } from '@/actions/review.action'
import { getDirectionSciences } from '@/actions/science.action'
import { IDirection, IReview, IScience } from '@/app.types'
import ReviewCard from '@/components/cards/review.card'
import NoResult from '@/components/shared/no-result'
import ReviewLoading from '@/components/shared/review-loading'
import { Accordion } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import { CalendarRange, Dot, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import AllReviews from './all-reviews'
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
					{t('whatYouWillLearn')}
				</h2>
			</div>

			<div className='mt-8 rounded-md bg-gradient-to-b from-background to-secondary p-4 lg:p-6'>
				<h2 className='font-space-grotesk text-3xl font-bold'>
					{t('directionContent')}
				</h2>

				<div className='mt-2 flex flex-row flex-wrap gap-8'>
					<div className='flex flex-col '>
						<CalendarRange className='size-10 ' />
						<p className='font-space-grotesk text-xl font-bold'>
							{t('directionDuration')}
						</p>
						<div className='text-2xl font-medium'></div>
					</div>
				</div>

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

			<div className='mt-8 rounded-md bg-secondary p-4 lg:p-6'>
				<h2 className='font-space-grotesk text-3xl font-bold'>
					{t('requirements')}
				</h2>

				<div className='mt-2'></div>
			</div>

			{isLoading ? (
				<ReviewLoading />
			) : reviews.length ? (
				<div className='mt-8 flex flex-col pb-20'>
					<div className='mt-6 flex items-center gap-1 font-space-grotesk text-xl'>
						<Star className='fill-[#DD6B20] text-[#DD6B20]' />
						<div className='font-medium'>
							{t('reviewDirection')}: <span className='font-bold'></span>
						</div>
						<Dot />
						<div className='font-medium'>
							<span className='font-bold'></span>
							{t('review')}
						</div>
					</div>

					<div className='mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2'>
						{reviews.map(review => (
							<ReviewCard key={review._id} review={review} />
						))}
					</div>

					{direction.reviewCount > 6 && <AllReviews {...direction} />}
				</div>
			) : (
				<NoResult
					title={t('noReviews')}
					description={t('noReviewsDescription')}
				/>
			)}
		</>
	)
}

export default Overview
