'use client'

import ContactForm from '@/components/forms/contact.form'
import useTranslate from '@/hooks/use-translate'
import { Mail, Phone } from 'lucide-react'

function Contacts() {
	const t = useTranslate()

	return (
		<>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2994.7900616494817!2d69.34011947579465!3d41.35691667130366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzI0LjkiTiA2OcKwMjAnMzMuNyJF!5e0!3m2!1sen!2s!4v1713857143371!5m2!1sen!2s'
				loading='lazy'
				className='h-96 w-full'
			/>

			<div className='container mx-auto max-w-6xl'>
				<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
					<div className='flex flex-col'>
						<h1 className='font-space-grotesk text-4xl font-bold'>
							{t('contactTitle')}
						</h1>
						<p className='mt-2 text-muted-foreground'>
							{t('contactDescription')}
						</p>

						<div className='mt-12 flex items-center gap-3'>
							<Mail className='size-4' />
							<p className='text-sm'>t.me/innovatsiya_uni</p>
						</div>
						<div className='mt-2 flex items-center gap-3'>
							<Phone className='size-4' />
							<p className='text-sm'>+99 8(93) 163 99 22</p>
						</div>
					</div>

					<div>
						<h1 className='mb-2 font-space-grotesk text-4xl font-bold'>
							{t('contactForm')}
						</h1>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
}

export default Contacts
