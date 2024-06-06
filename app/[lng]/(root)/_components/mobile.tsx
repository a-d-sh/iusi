'use client'

import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import useTranslate from '@/hooks/use-translate'
import { AlignCenter } from 'lucide-react'
import Link from 'next/link'
import GlobalSearch from './global-search'

function Mobile() {
	const t = useTranslate()

	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<Button
					size={'icon'}
					variant={'ghost'}
					aria-label='mobile-hamburger-menu'
				>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'} className='z-50 bg-white'>
				<SheetHeader>
					<Logo />
					<Separator />
				</SheetHeader>
				<div className='mt-4 flex flex-col space-y-3'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('UNIVERSITET')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Universitet haqida')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Rektor murojaati')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Interraktiv videolar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Me`yoriy hujjatlar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Rahbariyat')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Bo`limlar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Fakultetlar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Tashkiliy tuzilma')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Rekvizitlar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Kafedralar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('TA`LIM')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Bakalavriat')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Magistratura')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Doktorantura')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('ILM-FAN')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Ilmiy elektron jurnal')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Ilmiy tadbirlar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('HAMKORLIK')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Xalqaro hamkorlik aloqalari')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Xalqaro stipendiyalar va amaliyot')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('TALABALAR HAYOTI')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Iqtidorli talabalar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Talabalar turar joyi')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Ijtimoiy hayot')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('ABITURIYENTLARGA')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t(
												'Ta`lim shakllari va yo`nalishlari, mutaxassisliklari'
											)}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('2024-2025 o`quv yili uchun ro`yxatdan o`tish')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Ko`p beriladigan savollarga javoblar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/page/rektor' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Qabul rejasi')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('MATBUOT XIZMATI')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/news/1' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Yangiliklar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('ONLINE KUTUBXONA')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/directions' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Yo`nalish bo`yicha kitoblar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link
										href='/direction/66389859f78efe45dd149c42'
										className='w-full flex'
									>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('Umumblok fanlari bo`yicha kitoblar')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className='w-full rounded-none bg-gray-100 px-2 py-0 text-black'>
								{t('DiGi IUSI')}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-full z-50 bg-white text-black'>
							<DropdownMenuItem className='w-full'>
								<SheetClose asChild>
									<Link href='/profile' className='w-full flex'>
										<span className='w-full flex-grow block py-2 whitespace-normal min-w-0'>
											{t('DiGi IUSI')}
										</span>
									</Link>
								</SheetClose>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<div className='flex items-center justify-center gap-4'>
						<GlobalSearch />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
