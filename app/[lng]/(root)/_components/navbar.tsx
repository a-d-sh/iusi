'use client'

import LanguageDropdown from '@/components/shared/language-dropdown'
import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import Notification from '@/components/shared/notification'
import UserBox from '@/components/shared/user-box'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
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
										'font-medium transition-all hover:text-blue-500 hover:underline',
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
							<NavigationMenuList className=''>
								<NavigationMenuItem className=''>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										UNIVERSITET
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/aboutuniversity' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Universitet haqida
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Rektor murojaati
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Me`yoriy hujjatlar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Tashkiliy tuzilma
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Rekvizitlar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Universitet missiyasi
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Rahbariyat
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Bo`limlar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Fakultetlar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Markazlar
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										TA`LIM
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Bakalavriat
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Magistratura
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Doktorantura
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										ILM-FAN
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Ilmiy elektron jurnal
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Ilmiy tadbirlar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Universitet solnomasi
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Ilmiy konferensiyalar
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										HAMKORLIK
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Xalqaro hamkorlik aloqalari
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Xalqaro stipendiyalar va amaliyot
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Xalqaro tillar va madaniyatlar markazi
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										DISTANSION TA`LIM
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Distansion ta`lim haqida
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Distansion ta`lim qulayliklari
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										TALABALAR HAYOTI
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Iqtidorli talabalar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Talabalar turar joyi
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Ijtimoiy hayot
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										ABITURIYENTLARGA
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Me`yoriy-normativ hujjatlar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Ta`lim shakllari va yo`nalishlari, mutaxassisliklari
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												2024-2025 o`quv yili uchun ro`yxatdan o`tish
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Ko`p beriladigan savollarga javoblar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Qabul rejasi
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										MATBUOT XIZMATI
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/news' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Yangiliklar
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						<NavigationMenu className='hidden md:flex'>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='rounded-none bg-background/70 backdrop-blur-xl'>
										ONLINE KUTUBXONA
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Yo`nalish bo`yicha kitoblar
											</NavigationMenuLink>
										</Link>
										<Link href='/' legacyBehavior passHref>
											<NavigationMenuLink
												className={navigationMenuTriggerStyle()}
											>
												Umumblok fanlari bo`yicha kitoblar
											</NavigationMenuLink>
										</Link>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
