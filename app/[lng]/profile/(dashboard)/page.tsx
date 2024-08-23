import Header from '@/components/shared/header'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'

async function Page({ params }: LngParams) {
	const { t } = await translation(params.lng)

	return (
		<>
			<Header
				title={t('Ariza topshirish qadamlari')}
				description={t('Ariza to`ldiring va talaba bo`ling')}
			/>
			<div className='mt-4 grid grid-cols-2 gap-8 max-md:grid-cols-1'>
				<ol className='items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse'>
					<li className='flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse'>
						<span className='flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500'>
							1
						</span>
						<span>
							<h3 className='font-medium leading-tight'>User info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
						<svg
							className='w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 12 10'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='m7 9 4-4-4-4M1 9l4-4-4-4'
							/>
						</svg>
					</li>
					<li className='flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse'>
						<span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
							2
						</span>
						<span>
							<h3 className='font-medium leading-tight'>Company info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
						<svg
							className='w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 12 10'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='m7 9 4-4-4-4M1 9l4-4-4-4'
							/>
						</svg>
					</li>
					<li className='flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse'>
						<span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
							3
						</span>
						<span>
							<h3 className='font-medium leading-tight'>Payment info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
						<svg
							className='w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 12 10'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='m7 9 4-4-4-4M1 9l4-4-4-4'
							/>
						</svg>
					</li>
				</ol>
			</div>
		</>
	)
}

export default Page
