import { getStudentCourse } from '@/actions/course.action'
import { getCustomerCards } from '@/actions/customer.action'
import CreditCard from '@/components/cards/credit.card'
import ProgressCourseCard from '@/components/cards/progress-course.card'
import StatisticsCard from '@/components/cards/statistics.card'
import Header from '@/components/shared/header'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { auth } from '@clerk/nextjs'
import { Club, MonitorPlay } from 'lucide-react'
import { GrMoney } from 'react-icons/gr'

async function Page({ params }: LngParams) {
	const { t } = await translation(params.lng)
	const { userId } = auth()
	const data = await getStudentCourse(userId!)
	const cards = await getCustomerCards(userId!)

	return (
		<>
			<Header title={t('dashboard')} description={t('welcomeDashboard')} />

			<div className='mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1'>
				<StatisticsCard
					label={t('myCourses')}
					value={`${data.allCourses.length}`}
					Icon={MonitorPlay}
				/>
				<StatisticsCard
					label={t('expenses')}
					value={`${data.expenses.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}`}
					Icon={GrMoney}
				/>
				<StatisticsCard
					label={t('cards')}
					value={`${cards.length}`}
					Icon={Club}
				/>
			</div>

			<Header title={t('myCourses')} description={t('myCoursesDescription')} />

			<div className='mt-4 grid grid-cols-3 gap-4 max-md:grid-cols-1'>
				{data.allCourses
					.map(item => (
						<ProgressCourseCard
							key={item._id}
							course={JSON.parse(JSON.stringify(item.course))}
							progress={item.progress}
						/>
					))
					.splice(0, 3)}
			</div>

			<Header
				title={t('bankAccounts')}
				description={t('bankAccountsDescription')}
			/>
			<div className='mt-4 grid grid-cols-2 gap-8 max-md:grid-cols-1'>
				{cards
					.map(card => (
						<CreditCard key={card.id} card={JSON.parse(JSON.stringify(card))} />
					))
					.splice(0, 2)}
			</div>

			<Header title={t('myCourses')} description={t('myCoursesDescription')} />
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
					</li>
					<li className='flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse'>
						<span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
							2
						</span>
						<span>
							<h3 className='font-medium leading-tight'>Company info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
					</li>
					<li className='flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse'>
						<span className='flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
							3
						</span>
						<span>
							<h3 className='font-medium leading-tight'>Payment info</h3>
							<p className='text-sm'>Step details here</p>
						</span>
					</li>
				</ol>

				<ol className='flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse'>
					<li className='flex items-center text-blue-600 dark:text-blue-500'>
						<span className='flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500'>
							1
						</span>
						Personal <span className='hidden sm:inline-flex sm:ms-2'>Info</span>
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
					<li className='flex items-center'>
						<span className='flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
							2
						</span>
						Account <span className='hidden sm:inline-flex sm:ms-2'>Info</span>
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
					<li className='flex items-center'>
						<span className='flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400'>
							3
						</span>
						Review
					</li>
				</ol>
			</div>
		</>
	)
}

export default Page
