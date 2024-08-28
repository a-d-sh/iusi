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
		url: '1',
		title: 'Filologiya va tillarni o’qitish (Ingliz tili)',
		brand: '/majors/1.jpg',
		description:
			'<h1>Kafedra: Filologiya va pedagogika fanlar</h1><p><strong>O’qish davri:</strong> 4 yil</p><p><strong>Talab etiladigan kreditlar soni:</strong> 240</p><p><strong>Ishga joylashish imkoniyatlari:</strong> maktab va universitetlarda ingliz tili o’qituvchisi; OAV sohasida mutaxassis; muharrir; tarjimon; inglizzabon mamlakatlarda turli xil ofislarda ishchi.</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kunduzgi – 14 000 000 so’m (1 yil uchun)</p><p><strong>Ta’lim shakli va to’lov kontrakt qiymati:</strong> kechki – 13 000 000 so’m (1 yil uchun)</p><p><strong>Kirish imtihonlari:</strong> ingliz tili va mantiq fanidan test. Agar abituriyent tomonidan IELTS (kamida 5 ball) yoki Respublikada boshqa tan olingan ingliz tilini bilish bo’yicha sertifikatlar taqdim etilsa, u holda abituriyentlar xorijiy tilni bilish testidan ozod etiladilar.</p><strong>Ta’lim yo’nalishi tavsifi:</strong><p>Ushbu dastur doirasida talabalar ingliz tilini kommunikativ kompetensiyalar (lingvistik, pragmatik, sotsiolingvistik va strategik) hamda pedagogik ko’nikmalar nuqtai nazaridan o’rganadilar. Bundan tashqari talabalar ingliz tilida tanqidiy fikr yuritish, Angliya va AQSh badiiy matnlarini tahlil qilishni ham o’rganadilar. Bunda ular diskurs tahlil, matnni tanqidiy tahlil qilish metodlarini o’zlashtiradilar. Ushbu dastur doirasida talabalar ikkinchi til sifatida (tanlov asosida) yapon, xitoy yoki koreys tillaridan birini ham o’rganadilar. Ushbu ikkinchi til ko’nikmalari talabalarni kelajakda nafaqat Evropa, balki sharq mamlakatlarida ham ish topish imkoniyatini yaratadi.</p>',
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
