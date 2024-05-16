'use client'

import ContactForm from '@/components/forms/contact.form'
import useTranslate from '@/hooks/use-translate'

function Contacts() {
	const t = useTranslate()

	return (
		<>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2994.7900616494817!2d69.34011947579465!3d41.35691667130366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzI0LjkiTiA2OcKwMjAnMzMuNyJF!5e0!3m2!1sen!2s!4v1713857143371!5m2!1sen!2s'
				loading='lazy'
				className='h-96 w-full'
			/>

			<div className='flex flex-col md:flex-row justify-between items-start mt-6'>
				<div className='w-full md:w-1/2 h-full'>
					<img
						src='/contacts/contact.jpg'
						alt={t('contactTitle')}
						className='w-full h-full object-cover'
					/>
				</div>

				<div className='w-full md:w-1/2 max-w-4xl md:ml-4 border border-gray-300 rounded-lg p-4 md:mr-10 h-full flex flex-col justify-center'>
					<h1 className='mb-2 font-space-grotesk text-5xl font-bold'>
						{t('Biz bilan bog’lanish')}
					</h1>
					<p className='font-space-grotesk text-1xl font-bold flex items-center text-blue-500 mb-4'>
						{t(
							'Universitet ta’limi va qabul borasida savollaringiz bo’lsa, bizga murojaat qiling.'
						)}
					</p>
					<ContactForm />
				</div>
			</div>
		</>
	)
}

export default Contacts
