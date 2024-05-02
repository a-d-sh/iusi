import { getAllDirections } from '@/actions/direction.action'
import { SearchParamsProps } from '@/app.types'
import TopBar from '@/components/shared/top-bar'
import { Metadata } from 'next'
import AllDirections from './_components/all-directions'

export const metadata: Metadata = {
	title: 'Praktikum | Barcha kurslar',
	description:
		"Platformamizda mavjud bo'lgan barcha kurslar ro'yxati. O'zingizga mos kursni toping va o'rganishni boshlang!",
}
async function Page({ searchParams }: SearchParamsProps) {
	const resultJSON = await getAllDirections({
		searchQuery: searchParams?.q,
		filter: searchParams?.filter,
		page: searchParams?.page ? +searchParams?.page : 1,
	})

	const result = JSON.parse(JSON.stringify(resultJSON))

	return (
		<>
			<TopBar label='allDirections' description='allDirectionDescription' />
			<AllDirections result={result} />
		</>
	)
}

export default Page
