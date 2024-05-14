'use client'

import CustomImage from '@/components/shared/custom-image'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import Link from '@/node_modules/next/link'
import Autoplay from 'embla-carousel-autoplay'

function Directions() {
	const t = useTranslate()

	const items = [
		{ key: '1', title: 'Boshlang’ich ta’lim' },
		{ key: '2', title: 'Raqamli iqtisodiyot' },
		{ key: '3', title: 'Iqtisodiyot' },
		{ key: '4', title: 'Bank ishi va audit' },
		{ key: '5', title: 'Buxgalteriya va audit' },
		{ key: '6', title: 'O’zbek tili va adabiyoti' },
		{ key: '7', title: 'Moliya va moliyaviy texnologiyalar' },
		{ key: '8', title: 'Soliq va soliqqa tortish' },
		{ key: '9', title: 'Biznes huquqi' },
		{ key: '10', title: 'Dasturiy injiniring' },
		{ key: '11', title: 'Siyosatshunoslik' },
		{ key: '12', title: 'Xalqaro jurnalistika' },
		{ key: '13', title: 'Filologiya ingliz tili' },
		{ key: '14', title: 'Filologiya yapon tili' },
		{ key: '15', title: 'Filologiya koreys tili' },
		{ key: '16', title: 'Filologiya xitoy tili' },
		{ key: '17', title: 'Raqamli iqtisodiyot (Magistratura)' },
		{ key: '18', title: 'Lingvistika/ingliz tili (Magistratura)' },
	]

	return (
		<>
			<div className='container mx-auto max-w-6xl py-12'>
				<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
					<div className='flex flex-col space-y-1'>
						<h1 className='font-space-grotesk text-3xl font-bold'>
							{t('Ta`lim yo`nalishlari')}
						</h1>
					</div>
				</div>

				<Carousel
					className='mt-6 w-full md:flex'
					opts={{ align: 'start', loop: true }}
					plugins={[Autoplay({ delay: 3000 })]}
				>
					<CarouselContent className='w-full'>
						{items.map(item => (
							<CarouselItem
								key={item.key}
								className='basis-full md:basis-1/2 lg:basis-1/4'
							>
								<Link href={`/directions`}>
									<Card className='group w-full'>
										<CardContent className='relative h-56 w-full'>
											<CustomImage src={'/logo.png'} alt={'brand'} />
										</CardContent>
										<div className='my-4 flex flex-col space-y-2 px-2'>
											<Separator />
											<h2 className='line-clamp-3 font-space-grotesk text-2xl font-bold'>
												{t(item.title)}
											</h2>
										</div>
									</Card>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<Separator className='my-3' />
		</>
	)
}

export default Directions
