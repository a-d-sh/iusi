import {
	getDetailedDirection,
	getFeaturedDirections,
} from '@/actions/direction.action'
import { IDirection } from '@/app.types'
import DirectionCard from '@/components/cards/direction.card'
import TopBar from '@/components/shared/top-bar'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { translation } from '@/i18n/server'
import { Metadata, ResolvingMetadata } from 'next'
import Hero from './_components/hero'
import Overview from './_components/overview'

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const direction = await getDetailedDirection(params.slug!)

	return {
		title: direction.title,
		openGraph: {
			images: direction.previewImage,
			title: direction.title,
		},
		keywords: direction.tags,
	}
}

interface Props {
	params: { lng: string; slug: string }
}
async function Page({ params: { lng, slug } }: Props) {
	const { t } = await translation(lng)

	const directionJSON = await getDetailedDirection(slug)
	const directionsJSON = await getFeaturedDirections()

	const direction = JSON.parse(JSON.stringify(directionJSON))
	const directions = JSON.parse(JSON.stringify(directionsJSON))

	return (
		<>
			<TopBar label='allDirections' extra='Full Directions ReactJS' />

			<div className='container mx-auto max-w-6xl'>
				<div className='grid grid-cols-3 gap-4 pt-12'>
					<div className='col-span-2 max-lg:col-span-3'>
						<Hero {...direction} />
						<Overview {...direction} />
					</div>
				</div>

				<Separator className='my-12' />

				<h1 className='font-space-grotesk text-4xl font-bold'>
					{t('youMayLike')}
				</h1>

				<Carousel opts={{ align: 'start' }} className='mt-6 w-full'>
					<CarouselContent className='w-full'>
						{directions.map((direction: IDirection) => (
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
		</>
	)
}

export default Page
