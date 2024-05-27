'use client'

import { lngs } from '@/constants'
import { cn, getCurrentLng } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface Props {
	isMobile?: boolean
}

function LanguageDropdown({ isMobile = false }: Props) {
	const { lng } = useParams()
	const pathanme = usePathname()

	// Ensure lng is a string
	const currentLng = Array.isArray(lng) ? lng[0] : lng ?? 'default' // 'default' ni o'zingizga mos til kodi bilan almashtiring

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size={'icon'}
					className={cn(
						isMobile && 'w-full bg-primary hover:bg-primary/80 h-12'
					)}
					aria-label='language-dropdown'
				>
					<Image
						src={`/assets/locales/${currentLng}.png`}
						alt={getCurrentLng(currentLng) ?? 'default'}
						width={30}
						height={30}
					/>
					{isMobile && (
						<span className='ml-2 font-space-grotesk font-medium'>
							{getCurrentLng(currentLng) ?? 'Language'}
						</span>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuGroup>
					{lngs.map(item => (
						<Link key={item.route} href={`/${item.route}/${pathanme.slice(4)}`}>
							<DropdownMenuItem
								className={cn(
									'cursor-pointer',
									currentLng === item.route && 'bg-secondary'
								)}
							>
								<Image
									src={`/assets/locales/${item.route}.png`}
									alt={item.label}
									width={30}
									height={30}
								/>
								<span className='ml-2 font-space-grotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
