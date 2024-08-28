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
		title: 'Axborot texnologiyalar (dasturiy injiniring)',
		brand: '/majors/14.jpg',
		url: '14',
		description:
			'<h1>Kafedra: Iqtisod fanlar</h1><p><strong>O’qish davri:</strong> 4 yil</p><p><strong>Talab etiladigan kreditlar soni:</strong> 240</p><p><strong>Ishga joylashish imkoniyatlari:</strong> dasturchi; davlat va nodavlat idoralar, banklar, moliyaviy tashkilotlarning IT bo’linmalarida dasturchi-mutaxassis; xususiy bisnezda IT-tadbirkor; soha bo’yicha xorijda va O’zbekistonda ishlash imkoniyatlari.</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kunduzgi – 15 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kechki – 11 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> sirtqi – 11 000 000 so’m (1 yil uchun)</p><p><strong>Kirish imtihonlari:</strong> matematika va mantiq fanidan test</p><h2>Ta’lim yo’nalishi tavsifi:</h2><p>Axborot texnologiyalar davrida komp’yuterlar insonlar hayotida tobora muhim o’rin tuta boshlamoqda. Ushbu dastur doirasida talabalar dasturlash tilini, dasturlarni va ilovalarni ishlab chiqishni va ularni sinovdan o’tkazishni o’rganadilar. Natijada ushbu dasturiy mahsulotlar insonlar hayotini yengillashtirishga, ijtimoiy muammolarga innovatsion yechim topishga xizmat qiladi. Shu nuqtai nazardan dasturchi hozirda juda ham yuqori talabda bo’lgan kasblardan biri hisoblanadi. Bundan tashqari talabalar asosiy til sifatida ingliz tilini hamda qo’shimcha til sifatida yapon, xitoy yoki koreys tillaridan birini o’rganadilar.</p>',
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
