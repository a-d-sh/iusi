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
		title: 'Lingvistika (ingliz tili) (Magistratura)',
		brand: '/majors/18.jpg',
		url: '18',
		description:
			'<h1>Kafedra: Filologik va pedagogik fanlar</h1><p><strong>O’qish davri:</strong> 2 yil</p><p><strong>Talab etiladigan kreditlar soni:</strong> 120</p><p><strong>Ishga joylashish imkoniyatlari:</strong> lingvist; ingliz tili mutaxassisi; davlat va nodavlat idoralarida rahbarlik lavozimlarida ishlash imkoniyatlari; soha bo’yicha xorijda va O’zbekistonda ishlash imkoniyatlari. Bundan tashqari ushbu yo’nalish bitiruvchisi oliy ta’limda o’qituvchi va sohasi bo’yicha olim sifatida faoliyat olib borishi mumkin.</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kunduzgi – 20 000 000 so’m (1 yil uchun)</p><p><strong>Kirish imtihonlari:</strong> o’z yo’nalishi bo’yicha yozma imtihon</p><h2>Ta’lim yo’nalishi tavsifi:</h2><p>Ushbu dastur lingvistika (ingliz tili) bakalavr ta’lim yo’nalishini davomi hisoblanib, unda talabalar kommunikativ ko’nikmalarni, tanqidiy fikr yuritishni 4 ta kompetensiya (lingvistik, pragmatik, sociolingvistik, strategik) nuqtai nazardan o’rganadilar. Bularning hammasi hozirda mashhur bo’lib borayotgan korpus lingvistikasi doirasida ko’rib o’tiladi. Bundan tashqari asosiy e’tibor til sohasida o’qitish metodologiyasi, dasturlar ishlab chiqish texnologiyalar va baholash mexanizmlariga qaratiladi. Dastur kelajak pedagoglari-lingvistlarini (ingliz tili) tayyorlashga mo’ljallangan. Bundan tashqari talabalar asosiy til sifatida ingliz tilini hamda qo’shimcha til sifatida yapon, xitoy yoki koreys tillaridan birini o’rganadilar.</p>',
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
