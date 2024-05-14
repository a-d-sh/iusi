'use client'

// import CustomImage from '@/components/shared/custom-image'
import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import useTranslate from '@/hooks/use-translate'
import { Send } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

function Rektor() {
	const t = useTranslate()

	const onCopy = () => {
		const link = 'https://t.me/azizovulugbek'
		navigator.clipboard
			.writeText(link)
			.then(() => toast.success('Copied to clipboard'))
	}

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
						<h2 className='font-space-grotesk text-5xl font-bold'>
							{t('Azizov Ulug`bek Botirovich')}
						</h2>
						<p className='line-clamp-2 text-muted-foreground'>
							Ijtimoiy fanlar bo’yicha falsafa doktori
						</p>
						<p className='line-clamp-2 text-muted-foreground'>
							(PhD in Social Sciences, Germany)
						</p>
					</div>
				</div>
				<Separator className='my-3' />
				<div className='relative mt-12 flex w-full max-md:flex-col-reverse md:gap-12'>
					<div className='flex flex-col space-y-3'>
						<div className='sticky top-36'>
							<p className='text-lg uppercase text-muted-foreground'>
								Telegram
							</p>
							<div className='mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3'>
								<Button size={'icon'} variant={'outline'} onClick={onCopy}>
									<Send />
								</Button>
							</div>
						</div>
					</div>
					<div className='prose max-w-none flex-1 dark:prose-invert'>
						<div>
							<p>
								Xalqaro Ijtimoiy Innovatsiyalar Universitetida barchangizni
								qutlashdan mamnunman. Universitetimiz ijtimoiy fanlarni
								o’qitishga ixtisoslashgan bo’lib, unda 16 ta bakalavriat ta’lim
								yo’nalishlari va 2 ta magistratura mutaxassisliklari bo’yicha
								o’quv jarayonlarini tashkil etish rejalashtirilgan.
							</p>

							<h2>Bakalavriat:</h2>
							<ul>
								<li>
									Filologiya va tillarni o’qitish (ingliz, koreys, yapon,
									xitoy);
								</li>
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

							<p>
								Universitetimizda o’quv jarayonlari “markazda talaba”
								(student-centered education) tamoyili asosida tashkil etilishi
								ko’zda tutilgan bo’lib, bunda talabaning mustaqil ta’lim
								olishiga koproq soatlar ajratiladi, o’tiladigan mavzular ko’proq
								zamonaviy pedagogik texnologiyalarni (cooperative,
								inquiry-based, and problem-based learning) qo’llagan holda
								o’zlashtiriladi.
							</p>
							<p>
								Shularni inobatga holda universitetmizning ta’lim falsafasi
								“talabani o’qitish emas”, balki “mustaqil ta’lim olish”
								tamoyiliga asoslanadi. Ushbu ta’lim falsafasini amalga oshirish
								uchun universitetimizda AQShning Michigan davlat universiteti
								mutaxassislari hamkorligida yaratilgan DIGI IUSI elektron
								mustaqil talim olish platformasidan keng foydalaniladi. Bunda
								barcha ta’lim jarayonlari elektronlashtirilgan bo’lib,
								farzandingiz ushbu yaratilgan imkoniyatlardan faydalangan holda
								bilim oladi.
							</p>
							<p>
								Ijtimoiy mumamolarga ilmiy yechim topa oladigan kadr bo’lib
								yetishishda biz farzandingizga yo’l ko’rsatamiz.
							</p>
							<p>
								Barchangizni Xalqaro Ijtimoiy Innovatsiyalar Universitetida
								kutamiz.
							</p>
						</div>
					</div>
					{/* <div className='flex flex-col space-y-3'>
						<div className='sticky top-36'>
							<p className='text-lg uppercase text-muted-foreground'>
								Birgalikda muhokama
							</p>
							<div className='mt-4 flex flex-col max-md:flex-row max-md:space-x-3 md:space-y-3'>
								<Card className='group w-full'>
									<CardContent className='relative h-56 w-full'>
										<CustomImage src={'/logo.png'} alt={'brand'} />
									</CardContent>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<Separator />
										<h2 className='line-clamp-3 font-space-grotesk text-2xl font-bold'>
											{t('Statistika va ta’lim')}
										</h2>
									</div>
								</Card>
							</div>
						</div>
					</div> */}
					<div className='flex flex-col space-y-3'>
						<div className='sticky top-36'>
							<h2 className='line-clamp-3 font-space-grotesk text-2xl font-bold'>
								Birgalikda muhokama
							</h2>
							<div className='mt-4 flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0'>
								<div className='group w-full'>
									{/* Statistika va ta’lim */}
									<div className='relative h-56 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/Hc3aCJg9A5E?si=1dC9lBP21dgIrBA7'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											Statistika va ta’lim
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* Ta’limda kim baho berish lozim */}
									<div className='relative h-56 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/QkL-FrYnM78?si=IPmx7SwkOg7MSB7r'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											Ta’limda kim baho berish lozim
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* 🧐 Nima uchun bizda ilmiy yangilik yo‘q? */}
									<div className='relative h-56 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/831GSd2FBgk?si=-Nct7oZlGv7D1lPb'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											🧐 Nima uchun bizda ilmiy yangilik yo‘q?
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* ✅ This is normal! */}
									<div className='relative h-56 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/rZiXOqcmDI4?si=aPpq-ilyQ2HiWZXx'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>✅ This is normal!</p>
										<hr className='border-t border-gray-300' />
									</div>

									{/*  Xorijiy tillarni o’rganishdagi muammolar! */}
									<div className='relative h-56 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/gv-cG8C2sYo?si=pt1525JEWtK7vb5x'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											Xorijiy tillarni o’rganishdagi muammolar
										</p>
										<hr className='border-t border-gray-300' />
									</div>

									{/*  Ilmning o'z mantig'i bor! */}
									<div className='relative h-56 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/cWOYvCk-Kaw?si=OUMKcR8fvXHnhy6J'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											Ilmning o`z mantig`i bor!
										</p>
										<hr className='border-t border-gray-300' />
									</div>

									<hr className='border-t border-gray-300' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Separator className='my-3' />
		</>
	)
}

export default Rektor
