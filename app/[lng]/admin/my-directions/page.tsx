import { getDirections } from '@/actions/direction.action'
import { SearchParamsProps } from '@/app.types'
import AdminDirectionCard from '@/components/cards/admin-direction.card'
import Pagination from '@/components/shared/pagination'
import { auth } from '@clerk/nextjs'
import Header from '../../../../components/shared/header'

async function Page({ searchParams }: SearchParamsProps) {
	const { userId } = auth()
	const page = searchParams.page ? +searchParams.page : 1

	const result = await getDirections({ clerkId: userId!, page })

	return (
		<>
			<Header
				title='My Directions'
				description='Here are your latest directions'
			/>
			<div className='mt-4 grid grid-cols-3 gap-4'>
				{result.directions.map(item => (
					<AdminDirectionCard
						key={item._id}
						direction={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>
			<div className='mt-6'>
				<Pagination pageNumber={page} isNext={result.isNext} />
			</div>
		</>
	)
}

export default Page
