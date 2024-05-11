'use client'

import { Separator } from '@/components/ui/separator'
import { Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Rektor() {
	const pathname = usePathname()

	return (
		<>
			<div className='container mx-auto grid max-w-6xl py-24'>
				<h1 className='text-center font-space-grotesk text-5xl font-bold'>
					Universitet rektori
				</h1>
				<div className='mt-6 flex items-center gap-6 max-md:flex-col'>
					<Image
						src={'/assets/rektor.jpg'}
						alt='author'
						width='400'
						height='400'
						className='rounded-md max-md:self-start'
					/>
					<div className='flex flex-1 flex-col space-y-4'>
						<h2 className='font-space-grotesk text-3xl font-bold'>
							Azizov Ulug`bek Botirovich
						</h2>
						<p className='line-clamp-2 text-muted-foreground'>
							Ijtimoiy fanlar bo’yicha falsafa doktori(PhD in Social Sciences, Germany)
						</p>
					</div>
				</div>
				<Separator className='my-3' />
				<div className='relative mt-12 flex w-full max-md:flex-col-reverse md:gap-12'>
					<div className='flex flex-col space-y-3'>
						<div className='sticky top-36'>
							<p className='text-lg uppercase text-muted-foreground'>Telegram</p>
							<div className='mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3'>
								<Link href="https://t.me/azizovulugbek" size={'icon'} variant={'outline'}>
									<Send />
								</Link>
							</div>
						</div>
					</div>
					<div className='prose max-w-none flex-1 dark:prose-invert'>
					<div>
						<h2 className=''>Xalqaro Ijtimoiy Innovatsiyalar Universitetida barchangizni qutlashdan mamnunman</h2>
						<p>Universitetimiz ijtimoiy fanlarni o’qitishga ixtisoslashgan bo’lib, unda 16 ta bakalavriat ta’lim yo’nalishlari va 2 ta magistratura mutaxassisliklari bo’yicha o’quv jarayonlarini tashkil etish rejalashtirilgan.</p>
						
						<h2>Bakalavriat:</h2>
						<ul>
							<li>Filologiya va tillarni o’qitish (ingliz, koreys, yapon, xitoy);</li>
							<li>Boshlang’ich ta’lim</li>
							<li>O’zbek tili va adabiyoti</li>
							<li>Raqamli iqtisodiyot;</li>
							<li>Iqtisodiyot;</li>
							<li>Buxgalteriya va audit;</li>
							<li>Bank ishi va audit;</li>
							<li>Moliya va moliyaviy texnologiyalar;</li>
							<li>Soliq va soliqqa tortish;</li>
							<li>Huquqshunoshlik (biznes huquqi);</li>
							<li>Axborot texnologiyalari (dasturiy injiniring);</li>
							<li>Siyosatshunoslik;</li>
							<li>Xalqaro jurnalistika.</li>
						</ul>

						<h2>Magistratura:</h2>
						<ul>
							<li>Raqamli iqtisodiyot;</li>
							<li>Lingvistika (ingliz tili).</li>
						</ul>

						<p>Universitetimizda o’quv jarayonlari “markazda talaba” (student-centered education) tamoyili asosida tashkil etilishi ko’zda tutilgan bo’lib, bunda talabaning mustaqil ta’lim olishiga koproq soatlar ajratiladi, o’tiladigan mavzular ko’proq zamonaviy pedagogik texnologiyalarni (cooperative, inquiry-based, and problem-based learning) qo’llagan holda o’zlashtiriladi.</p>
						<p>Shularni inobatga holda universitetmizning ta’lim falsafasi “talabani o’qitish emas”, balki “mustaqil ta’lim olish” tamoyiliga asoslanadi. Ushbu ta’lim falsafasini amalga oshirish uchun universitetimizda AQShning Michigan davlat universiteti mutaxassislari hamkorligida yaratilgan DIGI IUSI elektron mustaqil talim olish platformasidan keng foydalaniladi. Bunda barcha ta’lim jarayonlari elektronlashtirilgan bo’lib, farzandingiz ushbu yaratilgan imkoniyatlardan faydalangan holda bilim oladi.</p>
						<p>Ijtimoiy mumamolarga ilmiy yechim topa oladigan kadr bo’lib yetishishda biz farzandingizga yo’l ko’rsatamiz.</p>
						<p>Barchangizni Xalqaro Ijtimoiy Innovatsiyalar Universitetida kutamiz.</p>
					</div>

					</div>
				</div>
			</div>
			<Separator className='my-3' />
		</>
	)
}

export default Rektor
