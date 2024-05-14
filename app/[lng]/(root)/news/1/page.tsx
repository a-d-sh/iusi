'use client'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import parse from 'html-react-parser'
import { CalendarDays, Minus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const data = [
	{
		image1_url: '/news/sukuba.jpg',
		image2_url: '/news/sukuba2.jpg',
		createdAt: '5.12.2023',
		description:
			'<h1>Universitetlararo hamkorlik</h1><p>2023 yilda, Xalqaro ijtimoiy innovatsiyalar universiteti (XIIU) rektori Ulugbek Azizov Yaponiyaning Sukuba universitetiga tashrif buyurdi. Maqsad – ikki oliy ta’lim muassasalari o’rtasida akademik aloqalarni o’rnatish, talaba va professor-o’qituvchilar almashinuvini yo’lga qo’yish va kelajakda XIIU bazasida ikki diplomli ta’lim yo’nalishini joriy etish.</p><p>Tashrif chog’ida U.Azizov Sukuba universiteti talabalariga O’zbekistondagi ta`lim tizimi to’g’risida ma’ruza qildi.</p><p>Eslatib o’tamiz, Ulugbek Azizov Sukuba universitetida 2008 – 2009 yillar oralig’ida “Xalqaro munosabatlar” magistrlik yo’nalishida tahsil olgan.</p>',
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
