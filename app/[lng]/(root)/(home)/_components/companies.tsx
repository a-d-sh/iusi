'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { companies } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import Autoplay from 'embla-carousel-autoplay'

function Companies() {
	const t = useTranslate()

	return (
		<div className='container mx-auto max-w-6xl py-12'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
				<div className='flex flex-col space-y-1'>
					<h1 className='font-space-grotesk text-3xl font-bold'>
						{t('Akademik hamkorlar')}
					</h1>
				</div>
			</div>
			<Separator className='my-3' />
			<div className='w-full bg-secondary'>
				<Carousel
					opts={{ align: 'start', loop: true }}
					className='container mx-auto w-full max-w-6xl'
					plugins={[Autoplay({ delay: 2000 })]}
				>
					<CarouselContent>
						{companies.map((company, idx) => (
							<CarouselItem
								key={idx}
								className='basis-1/3 md:basis-1/4 lg:basis-1/6 flex justify-center items-center'
							>
								<img src={company.src} alt={company.name} className='h-24' />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			<Separator className='my-3' />
		</div>
	)
}

export default Companies
