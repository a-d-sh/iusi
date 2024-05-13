'use client'

import useTranslate from '@/hooks/use-translate'
import React from 'react'

interface CardProps {
	title: string
	subtitle: string
	description: string
}

const data = [
	{
		title: '3 gektar',
		subtitle: 'Umumiy maydon:',
		description:
			'Zamonaviy jihozlangan va yashil maydonlarga ega shinam kampus',
	},
	{
		title: '9280 m²',
		subtitle: 'Umumiy bino maydoni:',
		description: "Zamonaviy o'quv xonalari va kovorking hududlar",
	},
	{
		title: '10 dona',
		subtitle: 'Ma’ruza zallari:',
		description: 'Barcha akustik talablarga javob beradigan + cheksiz WiFi',
	},
	{
		title: '52 dona',
		subtitle: 'Seminar xonalari:',
		description:
			'Kompyuter va interaktiv doskalar bilan jihozlangan + cheksiz WiFi',
	},
	{
		title: '3000 dan ortiq',
		subtitle: 'Elektron kutubxona:',
		description: 'Adabiyotlar to`plami',
	},
	{
		title: '16 dasturlar',
		subtitle: 'Ta’lim yo’nalishlari:',
		description:
			"Global ahamiyatga ega, amaliy hayotdan uzilmagan qiziqarli o'quv dasturlari",
	},
]

const Card: React.FC<CardProps> = ({ title, subtitle, description }) => (
	<div className='bg-white p-4 rounded-lg shadow-lg'>
		<h2 className='text-blue-500 text-3xl font-bold'>{title}</h2>
		<p className='text-xl mt-2'>{subtitle}</p>
		<p className='text-gray-500 text-lg'>{description}</p>
	</div>
)

const Facts = () => {
	const t = useTranslate()
	return (
		<div className='container mx-auto grid max-w-6xl'>
			<div className='flex items-center justify-between max-md:flex-col max-md:items-start'>
				<div className='flex flex-col space-y-1'>
					<h1 className='font-space-grotesk text-3xl font-bold'>
						{t('Universitetimiz qisqa faktlarda')}
					</h1>
				</div>
			</div>
			<div className='px-5 py-10'>
				<div className='flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6'>
					{data.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							subtitle={item.subtitle}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Facts
