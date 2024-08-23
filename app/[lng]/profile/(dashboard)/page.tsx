'use client'

import Header from '@/components/shared/header'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import React, { useEffect, useState } from 'react'

function Page({ params }: LngParams) {
	const [t, setT] = useState<any>(null)
	const [step, setStep] = useState(1)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		passportSeria: '',
		passportNumber: '',
		tell: '',
	})

	useEffect(() => {
		const fetchTranslation = async () => {
			try {
				const { t } = await translation(params.lng)
				setT(() => t)
			} catch (error) {
				console.error('Error fetching translation:', error)
			}
		}

		fetchTranslation()
	}, [params.lng])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const nextStep = (e: React.FormEvent) => {
		e.preventDefault()
		setStep(prevStep => prevStep + 1)
	}

	const prevStep = () => {
		setStep(prevStep => prevStep - 1)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
	}

	if (!t) return <div>Loading...</div>

	return (
		<>
			<Header
				title={t('Ariza topshirish qadamlari')}
				description={t('Ariza to`ldiring va talaba bo`ling')}
			/>
			<div className='mt-4 grid max-md:grid-cols-1 grid-cols-2 gap-8'>
				<ol className='w-full items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-8 rtl:space-x-reverse'>
					<li
						className={`flex items-center ${
							step >= 1
								? 'text-blue-600 dark:text-blue-500'
								: 'text-gray-500 dark:text-gray-400'
						} rtl:space-x-reverse space-x-2.5`}
					>
						<span
							className={`flex items-center justify-center size-8 border ${
								step >= 1
									? 'border-blue-600 dark:border-blue-500'
									: 'border-gray-500 dark:border-gray-400'
							} shrink-0 rounded-full`}
						>
							1
						</span>
						<span>
							<h3 className='font-medium leading-tight'>User info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
					</li>
					<li
						className={`flex items-center ${
							step >= 2
								? 'text-blue-600 dark:text-blue-500'
								: 'text-gray-500 dark:text-gray-400'
						} rtl:space-x-reverse space-x-2.5`}
					>
						<span
							className={`flex items-center justify-center size-8 border ${
								step >= 2
									? 'border-blue-600 dark:border-blue-500'
									: 'border-gray-500 dark:border-gray-400'
							} shrink-0 rounded-full`}
						>
							2
						</span>
						<span>
							<h3 className='font-medium leading-tight'>Company info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
					</li>
					<li
						className={`flex items-center ${
							step === 3
								? 'text-blue-600 dark:text-blue-500'
								: 'text-gray-500 dark:text-gray-400'
						} rtl:space-x-reverse space-x-2.5`}
					>
						<span
							className={`flex items-center justify-center size-8 border ${
								step === 3
									? 'border-blue-600 dark:border-blue-500'
									: 'border-gray-500 dark:border-gray-400'
							} shrink-0 rounded-full`}
						>
							3
						</span>
						<span>
							<h3 className='font-medium leading-tight'>Payment info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
					</li>
				</ol>
			</div>

			{/* Step Content */}
			<div className='mt-6'>
				{step === 1 && (
					<form onSubmit={nextStep}>
						<h3 className='mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white'>
							User Info
						</h3>
						<div className='mb-4 grid sm:grid-cols-2 gap-4'>
							<div>
								<label
									htmlFor='firstName'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
								>
									First Name
								</label>
								<input
									type='text'
									name='firstName'
									id='firstName'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='John'
									required
									value={formData.firstName}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='lastName'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
								>
									Last Name
								</label>
								<input
									type='text'
									name='lastName'
									id='lastName'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Doe'
									required
									value={formData.lastName}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='middleName'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
								>
									Middle Name
								</label>
								<input
									type='text'
									name='middleName'
									id='middleName'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Middle'
									value={formData.middleName}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='passportSeria'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
								>
									Passport Seria
								</label>
								<input
									type='text'
									name='passportSeria'
									id='passportSeria'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='AB'
									value={formData.passportSeria}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='passportNumber'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
								>
									Passport Number
								</label>
								<input
									type='text'
									name='passportNumber'
									id='passportNumber'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='12345678'
									value={formData.passportNumber}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='tell'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
								>
									Tell
								</label>
								<input
									type='text'
									name='tell'
									id='tell'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='+998901234567'
									value={formData.tell}
									onChange={handleChange}
								/>
							</div>
						</div>
						<button
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Next Step: Company Info
						</button>
					</form>
				)}

				{step === 2 && (
					<div>
						<h3 className='mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white'>
							Company Info
						</h3>
						{/* Company Info Form Fields */}
						<button
							onClick={prevStep}
							className='text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600'
						>
							Previous Step
						</button>
						<button
							onClick={nextStep}
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Next Step: Payment Info
						</button>
					</div>
				)}

				{step === 3 && (
					<div>
						<h3 className='mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white'>
							Payment Info
						</h3>
						{/* Payment Info Form Fields */}
						<button
							onClick={prevStep}
							className='text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600'
						>
							Previous Step
						</button>
						<button
							onClick={handleSubmit}
							className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
						>
							Submit Application
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Page
