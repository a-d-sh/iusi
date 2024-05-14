'use client'

import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { CalendarDays } from 'lucide-react'

const data = [
	{
		key: '1',
		image_url: '/news/sukuba.jpg',
		title: 'Tashrif',
		createdAt: '5.12.2023',
		description:
			'Xalqaro ijtimoiy innovatsiyalar universiteti (XIIU) rektori Azizov Ulugbek Yaponiyaning Sukuba universitetiga tashrif buyurdi',
		author_image: '/admin.jpg',
		author_name: 'Abduvoxidov Davlatbek',
	},
	{
		key: '2',
		image_url: '/news/AOIKAI.jpg',
		title: 'Uchrashuv',
		createdAt: '8.01.2024',
		description:
			'Xalqaro ijtimoiy innovatsiyalar universiteti rahbariyati Yaponiyaning AOIKAI kompaniyasi vakillari bilan Toshkentda uchrashuv o’tkazdi.',
		author_image: '/admin.jpg',
		author_name: 'Abduvoxidov Davlatbek',
	},
	{
		key: '3',
		image_url: '/news/Kolumbiya2.jpg',
		title: 'Tashrif',
		createdAt: '16.02.2024',
		description:
			'Xalqaro ijtimoiy innovatsiyalar universiteti (XIIU) rektori Azizov Ulugbek AQShning Kolumbiya universiteti «Pedagogika» fakultetiga tashrif buyurdi.',
		author_image: '/admin.jpg',
		author_name: 'Abduvoxidov Davlatbek',
	},
	{
		key: '4',
		image_url: '/news/Michigan2.jpg',
		title: 'Uchrashuv',
		createdAt: '21.02.2024',
		description:
			'Xalqaro ijtimoiy innovatsiyalar universiteti (XIIU) rektori Azizov Ulugbek AQShning Michigan davlat universiteti «Evropa, Rossiya va Evrosiyo» tadqiqotlar markazi vakillari bilan uchrashuv o’tkazdi.',
		author_image: '/admin.jpg',
		author_name: 'Abduvoxidov Davlatbek',
	},
]

function News() {
	const t = useTranslate()

	return (
		<>
			<div className='container mx-auto max-w-6xl  py-12'>
				<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
					<div className='flex flex-col space-y-1'>
						<h1 className='font-space-grotesk text-3xl font-bold'>
							{t('Yangiliklar')}
						</h1>
					</div>
				</div>
				<Separator className='my-3' />
				<div className='grid grid-cols-4 gap-x-4 gap-y-24 max-md:grid-cols-1 py-12'>
					{data.map(item => (
						<Link href={`/news/${item.key}`} key={item.key}>
							<div className={'group grid grid-cols-1 gap-4'}>
								<div className='relative rounded-md bg-secondary'>
									<Image
										width={650}
										height={335}
										src={item.image_url}
										alt={t(item.title)}
										className='-translate-y-6 rounded-md object-cover px-2 grayscale transition-all group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7'
									/>
								</div>

								<div className='flex flex-col space-y-4'>
									{/* Time info */}
									<div className='flex items-center gap-4'>
										<div className='flex items-center gap-2'>
											<CalendarDays className='size-5' />
											<p>{item.createdAt}</p>
										</div>
									</div>

									{/* Title */}
									<h2 className='font-space-grotesk text-3xl transition-colors group-hover:text-blue-500 max-md:text-2xl'>
										{t(item.title)}
									</h2>
									<p className='line-clamp-3 text-muted-foreground'>
										{t(item.description)}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export default News
