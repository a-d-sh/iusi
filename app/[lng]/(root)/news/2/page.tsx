'use client'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import parse from 'html-react-parser'
import { CalendarDays, Minus } from 'lucide-react'
import Image from 'next/image'

const data = [
	{
		image1_url: '/news/AOIKAI.jpg',
		image2_url: '/news/AOIKAI2.jpg',
		createdAt: '8.01.2024',
		description:
			'<h1>Universitetlararo hamkorlik</h1><p>Xalqaro ijtimoiy innovatsiyalar universiteti rahbariyati Yaponiyaning AOIKAI kompaniyasi vakillari bilan Toshkentda uchrashuv o’tkazdi. AOIKAI kompaniyasi Yaponiya mehnat bozoriga xorijdan malakali kadrlarni jalb qilish va Yaponiyada ishga joylashtirish masalalari bilan shug’ullanadi. Uchrashuvda tomonlar kelajakda Xalqaro ijtimoiy innovatsiyalar universiteti bitiruvchi talabalarini Yaроniya mehnat bozoriga tizimli jalb qilish masalalarini muhokama etdilar.</p>',
		author_image: '/admin.jpg',
		author_name: 'Abduvoxidov Davlatbek',
	},
]

function Page() {
	const t = useTranslate()
	return (
		<div className='container mx-auto max-w-5xl pt-[15vh]'>
			{data.map(item => (
				<>
					<div className='relative mt-12 flex w-full max-md:flex-col-reverse md:gap-12'>
						<div className='prose max-w-none flex-1 dark:prose-invert'>
							{parse(t(item.description))}
						</div>
					</div>

					<Image
						src={item.image1_url}
						alt='alt'
						width={`1120`}
						height={`595`}
						className='mt-4 rounded-md'
					/>
					<Image
						src={item.image2_url}
						alt='alt'
						width={`1120`}
						height={`595`}
						className='mt-4 rounded-md'
					/>
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
				</>
			))}
		</div>
	)
}

export default Page
