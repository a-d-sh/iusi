import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src={'/logo.png'} alt='logo' width={50} height={50} />
			<h4 className='font-space-grotesk text-4xl font-bold'>
				Xalqaro ijtimoiy
			</h4>

			<h4 className='font-space-grotesk text-4xl font-bold'>
				innovatsiyalar universiteti
			</h4>
		</Link>
	)
}

export default Logo
