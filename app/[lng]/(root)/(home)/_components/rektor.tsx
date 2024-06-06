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
					{t('Universitet rektori')}
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
						<h2 className='font-space-grotesk md:text-6xl text-2xl font-bold'>
							{t('Azizov Ulug`bek Botirovich')}
						</h2>
						<h2 className='line-clamp-2 md:text-4xl text-muted-foreground'>
							{t('Ijtimoiy fanlar bo’yicha falsafa doktori')}
						</h2>
						<h2 className='line-clamp-2 md:text-4xl text-muted-foreground'>
							{t('(PhD in Social Sciences, Germany)')}
						</h2>
					</div>
				</div>

				<div className='relative mt-12 flex w-full max-md:flex-col-reverse md:gap-12'>
					<div className='flex flex-col space-y-3'>
						<div className='sticky top-36'>
							<p className='text-lg uppercase text-muted-foreground'>
								{t('Telegram')}
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
							<p className='text-lg'>
								{t(
									'Xalqaro ijtimoiy innovatsiyalar universitetining saytida sizni ko’rib turganimizdan mamnunmiz!'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Universitetimiz 2023 yil 5-iyunda Toshkent shahrida tashkil etilgan. Joriy yilning sentyabr oyidan universitetimiz eshiklari talabalar uchun ochiladi. Biz va bizning professor-o’qituvchilarimiz universitetimizda O’zbekiston rivoji uchun katta hissa qo’sha oladigan iste’dodli yoshlar o’qishiga ishonch bildiradi.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Universitetimiz ijtimoiy fanlarni o’qitishga ixtisoslashgan bo’lib, unda 16 ta bakalavriat ta’lim yo’nalishlari va 2 ta magistratura mutaxassisliklari bo’yicha o’quv jarayonlarini tashkil etish rejalashtirilgan. Bular:'
								)}
							</p>
							<h2 className='text-lg'>{t('Bakalavriat')}</h2>
							<ul className='text-lg'>
								<li>
									{t(
										'Filologiya va tillarni o’qitish (ingliz, koreys, yapon, xitoy)'
									)}
								</li>
								<li>{t('Boshlang’ich ta’lim')}</li>
								<li>{t('O’zbek tili va adabiyoti')}</li>
								<li>{t('Raqamli iqtisodiyot')}</li>
								<li>{t('Iqtisodiyot')}</li>
								<li>{t('Buxgalteriya va audit')}</li>
								<li>{t('Bank ishi va audit')}</li>
								<li>{t('Moliya va moliyaviy texnologiyalar')}</li>
								<li>{t('Soliq va soliqqa tortish')}</li>
								<li>{t('Huquqshunoshlik (biznes huquqi)')}</li>
								<li>{t('Axborot texnologiyalari (dasturiy injiniring)')}</li>
								<li>{t('Siyosatshunoslik')}</li>
								<li>{t('Xalqaro jurnalistika')}</li>
							</ul>
							<h2 className='text-lg'>{t('Magistratura')}</h2>
							<ul className='text-lg'>
								<li>{t('Raqamli iqtisodiyot')}</li>
								<li>{t('Lingvistika (ingliz tili)')}</li>
							</ul>
							<p className='text-lg'>
								{t(
									'Shuni e’tirof etish joizki, Xalqaro ijtimoiy innovatsiyalar universiteti yuqori malakali professor-o’qituvchilar jamoasidan tarkib topgan. Ushbu professor-o’qituvchilar orasida bir qator fan doktorlari bo’lib, ular asosan O’zbekiston, AQSh, Hindiston va Rossiya mamlakatlaridan jalb etilgan.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Universitetimizda o’quv jarayonlari “markazda talaba” (student-centered education) tamoyili asosida tashkil etilishi ko’zda tutilgan bo’lib, bunda talabaning mustaqil ta’lim olishiga ko’proq soatlar ajratiladi, o’tiladigan mavzular zamonaviy pedagogik texnologiyalarni (cooperative, inquiry-based, and problem-based learning) qo’llagan holda o’zlashtiriladi. Bularning barchasi talabalar sifatli bilim olishlari, o’zlarining nazariy va amaliy ko’nikmalarini rivojlantirish hamda kreativ va tanqidiy fikr yuritishlari uchun qulay sharoitlar yaratadi.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Shularni inobatga olgan holda universitetimizning ta’lim falsafasi “talaba mustaqil ta’lim olishi uchun harakat qilamiz” tamoyiliga asoslanadi. Ushbu ta’lim falsafasini amalga oshirish uchun universitetimizda AQShning Michigan davlat universiteti mutaxassislari hamkorligida yaratilgan DiGi IUSI elektron mustaqil ta’lim olish platformasidan keng foydalaniladi. Bunda barcha ta’lim jarayonlari elektronlashtirilgan bo’lib, farzandingiz ushbu yaratilgan imkoniyatlardan foydalangan holda bilim oladi.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Ijtimoiy muammolarga nazariy va amaliy yechim topa oladigan kadr bo’lib yetishishda zamin yaratamiz.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Barchnagizni Xalqaro ijtimoiy innovatsiyalar universitetida kutamiz.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Universitetimiz, talabalarni qabuli va ularning o’qishlari to’g’risidagi ma’lumotni siz qo’shimcha tarzda bizning Facebook, Instagram, Telegram va Linkedin ijtimoiy tarmoqlaridagi rasmiy kanallarimiz orqali topa olish imkoniyatiga egasiz.'
								)}
							</p>
							<p className='text-lg'>
								{t(
									'Biz bilan saytimizdagi elektron arizani to’ldirish yoki quyidagi telefon raqamlari orqali bog’lanishingiz mumkin.'
								)}
							</p>
						</div>
					</div>
					<div className='flex flex-col space-y-3'>
						<Separator className='my-3' />
						<div className='sticky top-36'>
							<h2 className='line-clamp-3 font-space-grotesk text-2xl font-bold'>
								{t('Birgalikda muhokama')}
							</h2>
							<hr className='border-t border-gray-300' />
							<div className='mt-4 flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0'>
								<div className='group w-60'>
									{/* Michigan state university */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/RH6Lg3H3r5M?si=FleyPnDy_7eJQqfM'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											{t('Michigan state university')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* Columbia University */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
										<iframe
											width='100%'
											height='100%'
											src='https://www.youtube.com/embed/MYvq1QtOL3k?si=8HV1RvRGOiItx3pI'
											title='YouTube video'
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
										></iframe>
									</div>
									<div className='my-4 flex flex-col space-y-2 px-2'>
										<p className='text-lg text-gray-400'>
											{t('Columbia University')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* Statistika va ta’lim */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
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
											{t('Statistika va ta’lim')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* Ta’limda kim baho berish lozim */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
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
											{t('Ta’limda kim baho berish lozim')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* 🧐 Nima uchun bizda ilmiy yangilik yo‘q? */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
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
											{t('🧐 Nima uchun bizda ilmiy yangilik yo‘q?')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>
									{/* ✅ This is normal! */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
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
										<p className='text-lg text-gray-400'>
											{t('✅ This is normal!')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>

									{/*  Xorijiy tillarni o’rganishdagi muammolar! */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
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
											{t('Xorijiy tillarni o’rganishdagi muammolar')}
										</p>
										<hr className='border-t border-gray-300' />
									</div>

									{/*  Ilmning o'z mantig'i bor! */}
									<div className='relative h-36 w-full bg-gray-200 overflow-hidden'>
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
											{t('Ilmning o`z mantig`i bor!')}
										</p>
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
