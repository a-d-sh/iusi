'use client'

import { IDirection } from '@/app.types'
import DirectionCard from '@/components/cards/direction.card'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { filterDirections } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { cn, formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	directions: IDirection[]
}
function FeaturedDirections({ directions }: Props) {
	const t = useTranslate()
	const searchParams = useSearchParams()
	const router = useRouter()

	const onUpdateParams = (value: string) => {
		const newUrl = formUrlQuery({
			value,
			key: 'filter',
			params: searchParams.toString(),
			toDirections: true,
		})

		router.push(newUrl)
	}

	return (
		<div className='container mx-auto max-w-6xl py-12'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
				<div className='flex flex-col space-y-1'>
					<h1 className='font-space-grotesk text-3xl font-bold'>
						{t('exploreDirections')}
					</h1>
					<p className='text-sm text-muted-foreground'>
						{t('exploreDirectionsDescription')}
					</p>
				</div>

				<div className='flex items-center gap-1 self-end max-md:mt-4 max-md:w-full max-md:rounded-full max-md:bg-primary max-md:p-2'>
					{filterDirections.map(item => (
						<Button
							key={item.name}
							rounded={'full'}
							variant={item.name === 'all' ? 'secondary' : 'ghost'}
							className={cn('font-medium max-md:w-full max-md:bg-secondary')}
							onClick={() => onUpdateParams(item.name)}
						>
							{t(item.label)}
						</Button>
					))}
				</div>
			</div>
			<div className='mt-4 flex flex-col space-y-4 md:hidden'>
				{directions.map(direction => (
					<DirectionCard key={direction.title} {...direction} />
				))}
			</div>
			<Carousel
				opts={{ align: 'start' }}
				className='mt-6 hidden w-full md:flex'
			>
				<CarouselContent className='w-full'>
					{directions.map(direction => (
						<CarouselItem
							key={direction.title}
							className='md:basis-1/2 lg:basis-1/3'
						>
							<DirectionCard {...direction} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default FeaturedDirections
