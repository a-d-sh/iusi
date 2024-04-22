'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

function Hero() {
	return (
		<>
			<div className='w-full'>
				<Carousel
					opts={{ align: 'start', loop: true }}
					plugins={[Autoplay({ delay: 3000 })]}
				>
					<CarouselContent>
						<CarouselItem>
							<div className='text-5xl font-extrabold ...'>
								<Image
									src={'/assets/corusel/slider1.jpg'}
									alt='hero'
									width={520}
									height={520}
									sizes='(max-width: 520px) 100vw, (max-width: 520px) 50vw, 33vw'
									className='h-auto w-full object-cover'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<Image
								src={'/assets/corusel/slider2.jpg'}
								alt='hero'
								width={520}
								height={520}
								sizes='(max-width: 520px) 100vw, (max-width: 520px) 50vw, 33vw'
								className='h-auto w-full self-end object-cover'
							/>
						</CarouselItem>
						<CarouselItem>
							<Image
								src={'/assets/corusel/slider3.jpg'}
								alt='hero'
								width={520}
								height={520}
								sizes='(max-width: 520px) 100vw, (max-width: 520px) 50vw, 33vw'
								className='h-auto w-full self-end object-cover'
							/>
						</CarouselItem>
						<CarouselItem>
							<Image
								src={'/assets/corusel/slider4.jpg'}
								alt='hero'
								width={520}
								height={520}
								sizes='(max-width: 520px) 100vw, (max-width: 520px) 50vw, 33vw'
								className='h-auto w-full self-end object-cover'
							/>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</>
	)
}

export default Hero
