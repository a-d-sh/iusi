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
					plugins={[Autoplay({ delay: 6000 })]}
				>
					<CarouselContent>
						<CarouselItem>
							<div className='w-full h-auto'>
								<Image
									src={'/assets/corusel/slider1.jpg'}
									alt='hero'
									layout='responsive'
									width={1920}
									height={1080}
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className='w-full h-auto'>
								<Image
									src={'/assets/corusel/slider2.jpg'}
									alt='hero'
									layout='responsive'
									width={1920}
									height={1080}
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className='w-full h-auto'>
								<Image
									src={'/assets/corusel/slider3.jpg'}
									alt='hero'
									layout='responsive'
									width={1920}
									height={1080}
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className='w-full h-auto'>
								<Image
									src={'/assets/corusel/slider4.jpg'}
									alt='hero'
									layout='responsive'
									width={1920}
									height={1080}
									sizes='(max-width: 768px) 100vw, 50vw'
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</>
	)
}

export default Hero
