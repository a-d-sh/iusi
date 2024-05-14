'use client'

import LanguageDropdown from '@/components/shared/language-dropdown'
import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import Notification from '@/components/shared/notification'
import UserBox from '@/components/shared/user-box'
import { navLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { Button } from '../../../../components/ui/button'
import GlobalSearch from './global-search'
import Mobile from './mobile'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

function Navbar() {
	const t = useTranslate()
	const pathname = usePathname()
	const { lng } = useParams()

	return (
		<>
			<div className='fixed inset-0 z-40 h-16 bg-background/70 backdrop-blur-xl'>
				<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
					<div className='flex items-center gap-4'>
						<Logo />
						<div className='hidden items-center gap-3 border-l pl-2 md:flex'>
							{navLinks.map(nav => (
								<Link
									href={`/${nav.route}`}
									key={nav.route}
									className={cn(
										'font-medium text-xl transition-all hover:text-blue-500 hover:underline',
										(nav.route === '' ? `${pathname}/` : pathname) ===
											`/${lng}/${nav.route}` && 'text-blue-500'
									)}
								>
									{t(nav.name)}
								</Link>
							))}
						</div>
					</div>

					<div className='flex items-center gap-2'>
						<div className='flex items-center gap-2 md:border-r md:pr-3'>
							<div className='hidden gap-1 md:flex'>
								<GlobalSearch />
								<LanguageDropdown />
								<Notification />
							</div>
							<Mobile />
							<ModeToggle />
						</div>
						<SignedIn>
							<UserBox />
						</SignedIn>
						<SignedOut>
							<SignInButton mode='modal'>
								<Button size={'lg'} rounded={'full'} className='hidden md:flex'>
									{t('logIn')}
								</Button>
							</SignInButton>
							<SignInButton mode='modal'>
								<Button size={'icon'} variant={'ghost'} className='md:hidden'>
									<LogIn />
								</Button>
							</SignInButton>
						</SignedOut>
					</div>
				</div>
				<div className='mx-auto h-full max-w-7xl items-center justify-between'>
					<div className='flex items-center'>
						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('UNIVERSITET')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										{/* Har bir link o'z NavigationMenuItem ichida */}
										<NavigationMenuItem className='list-none'>
											<Link href='/aboutuniversity' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Universitet haqida')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Rektor murojaati')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Interraktiv videolar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Me`yoriy hujjatlar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Rahbariyat')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Bo`limlar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Fakultetlar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Tashkiliy tuzilma')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Rekvizitlar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Kafedralar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('TA`LIM')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Bakalavriat')}
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Magistratura')}
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Doktorantura')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('ILM-FAN')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Ilmiy elektron jurnal')}
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Ilmiy tadbirlar')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('HAMKORLIK')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Xalqaro hamkorlik aloqalari')}
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Xalqaro stipendiyalar va amaliyot')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('TALABALAR HAYOTI')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Iqtidorli talabalar')}
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Talabalar turar joyi')}
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Ijtimoiy hayot')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('ABITURIYENTLARGA')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t(
														'Ta`lim shakllari va yo`nalishlari, mutaxassisliklari'
													)}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('2024-2025 o`quv yili uchun ro`yxatdan o`tish')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Ko`p beriladigan savollarga javoblar')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
										<NavigationMenuItem className='list-none'>
											<Link href='/' legacyBehavior passHref>
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
												>
													{t('Qabul rejasi')}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('MATBUOT XIZMATI')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/news/1' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Yangiliklar')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('ONLINE KUTUBXONA')}
									</NavigationMenuTrigger>
									<NavigationMenuContent className='absolute'>
										<Link href='/directions' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Yo`nalish bo`yicha kitoblar')}
											</NavigationMenuLink>
										</Link>
										<Link
											href='/direction/66389859f78efe45dd149c42'
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('Umumblok fanlari bo`yicha kitoblar')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none backdrop-blur-xl bg-background/70 px-2 py-0'>
										{t('DIGI IUSI')}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/profile' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												{t('DIGI IUSI')}
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						{/* <nav className='hidden md:flex'>
							<Link href='/profile' className={navigationMenuTriggerStyle()}>
								DIGI IUSI
							</Link>
						</nav> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
