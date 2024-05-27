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
		title: 'Iqtisodiyot',
		brand: '/majors/8.jpg',
		url: '8',
		description:
			'<h1>Kafedra: Iqtisod fanlar</h1><p><strong>O’qish davri:</strong> 4 yil</p><p><strong>Talab etiladigan kreditlar soni:</strong> 240</p><p><strong>Ishga joylashish imkoniyatlari:</strong> iqtisodchi; davlat va nodavlat idoralarida, O’zbekiston yoki xorijdagi banklarda, moliyaviy tashkilotlarda iqtisodchi.</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kunduzgi – 17 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kechki – 17 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> sirtqi – 12 000 000 so’m (1 yil uchun)</p><p><strong>Kirish imtihonlari:</strong> matematika va mantiq fanidan test.</p><h2>Ta’lim yo’nalishi tavsifi:</h2><p>Ushbu dastur doirasida talabalar qanday iqtisodiy qonuniyatlar mavjudligi, mamlakatimiz iqtisodiyotini rivojlantirish, xalq xo’jaligida iqtisodiyotning muhimligi, jumladan, tovarlar ishlab chiqish, xizmatlar ko’rsatish, eksport va import operatsiyalarini amalga oshirish, biznesni yo’lga qo’yish va boshqa shu kabi jabhalarda iqtisodiy ko’nikmalarga ega bo’ladilar. Bu borada ushbu ta’lim yo’nalishida quyidagi mavzular dasturning asosini tashkil etadi: xalqaro savdo, eksport va import operatsiyalari, kambag’allikni kamaytirish, inflyatsiyani eng past ko’rsatkichga olib tushish, soliqlar, imtiyozlar, bo’sh ish o’rinlarini yaratish va hokazo. Talabalar ushbu mavzulani iqtisodiy nazariya va keyslar yordamida o’rganadilar. Bunda ular insonning iqtisodiy xatti-harakatini, qaror qabul qilish tamoyillarini ko’rib chiqadilar. Bundan tashqari talabalar ingliz tilini asosiy til sifatida o’rganadilar. Qo’shimcha til sifatida talabalar yapon, xitoy yoki koreys tillaridan birini o’rganadilar.</p>',
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
								<div className='prose max-w-none flex-1 dark:prose-invert'>
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
