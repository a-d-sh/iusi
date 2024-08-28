'use client'
import TopBar from '@/components/shared/top-bar'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import parse from 'html-react-parser'
import Image from 'next/image'
import React from 'react'
import Contacts from '../../(home)/_components/contacts'

const data = [
	{
		title: 'Boshlang’ich ta’lim',
		brand: '/majors/5.jpg',
		url: '5',
		description:
			'<h1>Kafedra: Filologiya va pedagogika fanlar</h1><p><strong>O’qish davri:</strong> 4 yil</p><p><strong>Talab etiladigan kreditlar soni:</strong> 240</p><p><strong>Ishga joylashish imkoniyatlari:</strong> maktablarda boshlang’ich ta’lim o’qituvchisi; Maktabgacha va maktab ta’limi vazirligida va uning bo’linmalarida mas’ul hodim.</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kunduzgi – 14 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kechki – 13 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> sirtqi (yo’nalish bo’yicha kamida 5 yil stajga ega bo’lgan taqdirda) – 11 000 000 so’m (1 yil uchun)</p><p><strong>Kirish imtihonlari:</strong> o’zbek tili va mantiq fanidan test. Agar abituriyent tomonidan Respublikada tan olingan o’zbek tilini bilish bo’yicha sertifikat taqdim etilsa, u holda abituriyentlar til bilish testidan ozod etiladilar.</p><h2>Ta’lim yo’nalishi tavsifi:</h2><p>Boshlang’ich ta’lim bolaning kelajakda muvaffaqiyatga erishishi uchun muhim tayanch omili bo’lib hisoblanadi. Ushbu ulkan, savobli maqsadga erishish uchun universitetimiz jamoasi tomonidan ishlab chiqilgan dastur doirasida talabalar malakali pedagog bo’lib etishishlari uchun ham nazariy, ham amaliy fanlarni o’zlashtiradilar. Ushbu maqsadda ular hafta davomida 4 kun universitetda nazariy bilimlarni o’zlashtiradilar, 2 kun amaliyotlarini esa Toshkent shahridagi maktablardan birida o’taydilar. Universitetdagi ta’lim jarayonlari “markazda talaba” tamoyili asosida tashkil etiladi va ushbu tamoyil asosida o’zlashtiriladigan fanlarga o’qish, yo’zish, xorijiy til, matematika kabi fanlar kiradi. Tanlov asosida talabalar ingliz, yapon, xitoy yoki koreys tillarini o’zlashtirishlari mumkin. Ushbu til ko’nikmasi talabalarga xorijda ish topish imkoniyatlarini yaratadi.</p>',
	},
]

function Page() {
	const t = useTranslate()
	return (
		<>
			{data.map((item, index) => (
				<TopBar key={index} label={item.title} />
			))}
			<div className='container mx-auto max-w-5xl pt-[2vh]'>
				{data.map((item, index) => (
					<React.Fragment key={index}>
						<div className='flex flex-col md:flex-row justify-center items-center gap-4'>
							<div className='relative flex w-full max-md:flex-col-reverse md:gap-12'>
								<div className='text-lg prose max-w-none flex-1 dark:prose-invert'>
									{parse(t(item.description))}
								</div>
							</div>
							<Image
								src={item.brand}
								alt={item.title}
								width={400}
								height={400}
								className='w-full md:w-1/4 rounded-md sticky top-[16vh]'
							/>
						</div>

						<Separator className='my-3' />
					</React.Fragment>
				))}
			</div>
			<Contacts />
		</>
	)
}

export default Page
