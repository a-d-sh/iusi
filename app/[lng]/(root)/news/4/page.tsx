'use client'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import parse from 'html-react-parser'
import { CalendarDays, Minus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const data = [
	{
		image1_url: '/news/Michigan.jpg',
		image2_url: '/news/Michigan2.jpg',
		createdAt: '21.02.2024',
		description:
			'<h1>Universitetlararo hamkorlik</h1><p>Xalqaro ijtimoiy innovatsiyalar universiteti (XIIU) rektori Azizov Ulugbek AQShning Michigan davlat universiteti «Evropa, Rossiya va Evrosiyo» tadqiqotlar markazi vakillari bilan uchrashuv o’tkazdi. Maqsad – ikki oliy ta’lim muassasalari o’rtasida akademik aloqalarni o’rnatish, XIIUda «Evropa, Rossiya va Evrosiyo» tadqiqotlar markazi vakillariga tadqiqot o’tkazish imkoniyatlarini yaratish</p>',
		author_image: '/admin.jpg',
		author_name: 'Abduvoxidov Davlatbek',
	},
]

function Page() {
	const t = useTranslate()
	return (
		<div className='container mx-auto max-w-5xl pt-[15vh]'>
			{data.map((item, index) => (
				<React.Fragment key={index}>
					<div className='relative mt-12 flex w-full max-md:flex-col-reverse md:gap-12'>
						<div className='prose max-w-none flex-1 dark:prose-invert'>
							{parse(t(item.description))}
						</div>
					</div>

					<div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4'>
						<Image
							src={item.image1_url}
							alt='Image 1'
							width={1120}
							height={595}
							className='w-full md:w-1/2 rounded-md object-cover'
						/>
						<Image
							src={item.image2_url}
							alt='Image 2'
							width={1120}
							height={595}
							className='w-full md:w-1/2 rounded-md object-cover'
						/>
					</div>
					<Separator className='my-3' />

					<div className='mt-4 flex flex-wrap items-center gap-4 max-md:justify-center'>
						<div className='flex items-center gap-2'>
							<Image
								src={item.author_image}
								alt='author'
								width={30}
								height={30}
								className='rounded-sm object-cover'
							/>
							<p>by {item.author_name}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<CalendarDays className='size-5' />
							<p>{item.createdAt}</p>
						</div>
					</div>
					<Separator className='my-3' />
				</React.Fragment>
			))}
		</div>
	)
}

export default Page
