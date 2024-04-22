import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src={'/logo.png'} alt='logo' width={60} height={60} />
			{/* <h5 className='font-space-grotesk text-1xl font-bold'>
				Xalqaro ijtimoiy innovatsiyalar universiteti
			</h5> */}
		</Link>
	)
}

export default Logo
