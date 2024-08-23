'use client'

import Header from '@/components/shared/header'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { useState } from 'react'

async function Page({ params }: LngParams) {
	const { t } = await translation(params.lng)

	// State to manage the current step
	const [step, setStep] = useState(1)

	// State to hold form data
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	// Handle input change
	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	// Handle next step
	const nextStep = () => {
		setStep(prevStep => prevStep + 1)
	}

	// Handle previous step
	const prevStep = () => {
		setStep(prevStep => prevStep - 1)
	}

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault()
		// Process final form data submission
		console.log('Form submitted:', formData)
	}

	return (
		<>
			<Header
				title={t('Ariza topshirish qadamlari')}
				description={t('Ariza to`ldiring va talaba bo`ling')}
			/>
			<div className='mt-4 grid grid-cols-2 gap-8 max-md:grid-cols-1'>
				<ol className='items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse'>
					<li
						className={`flex items-center ${
							step >= 1
								? 'text-blue-600 dark:text-blue-500'
								: 'text-gray-500 dark:text-gray-400'
						} space-x-2.5 rtl:space-x-reverse`}
					>
						<span
							className={`flex items-center justify-center w-8 h-8 border ${
								step >= 1
									? 'border-blue-600 dark:border-blue-500'
									: 'border-gray-500 dark:border-gray-400'
							} rounded-full shrink-0`}
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
						} space-x-2.5 rtl:space-x-reverse`}
					>
						<span
							className={`flex items-center justify-center w-8 h-8 border ${
								step >= 2
									? 'border-blue-600 dark:border-blue-500'
									: 'border-gray-500 dark:border-gray-400'
							} rounded-full shrink-0`}
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
						} space-x-2.5 rtl:space-x-reverse`}
					>
						<span
							className={`flex items-center justify-center w-8 h-8 border ${
								step === 3
									? 'border-blue-600 dark:border-blue-500'
									: 'border-gray-500 dark:border-gray-400'
							} rounded-full shrink-0`}
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
						<div className='grid gap-4 mb-4 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='username'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Username
								</label>
								<input
									type='text'
									name='username'
									id='username'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='username.example'
									required
									value={formData.username}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='name@company.com'
									required
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='password'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='•••••••••'
									required
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									htmlFor='confirm-password'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Confirm password
								</label>
								<input
									type='password'
									name='confirmPassword'
									id='confirm-password'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='•••••••••'
									required
									value={formData.confirmPassword}
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
					<form onSubmit={handleSubmit}>
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
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</>
	)
}

export default Page
