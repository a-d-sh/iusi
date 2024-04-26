import { getBooks } from '@/actions/book.action'
import { getScienceById } from '@/actions/science.action'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ChevronLeftCircle, Settings, Settings2 } from 'lucide-react'
import Link from 'next/link'
import Header from '../../../../../../components/shared/header'
import Action from './_components/action'
import Books from './_components/books'
import ScienceField from './_components/science-field'

interface Params {
	params: { scienceId: string; directionId: string }
}
async function Page({ params }: Params) {
	const scienceJSON = await getScienceById(params.scienceId)
	const booksJSON = await getBooks(params.scienceId)

	const science = JSON.parse(JSON.stringify(scienceJSON))
	const books = JSON.parse(JSON.stringify(booksJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Link href={`/en/admin/my-directions/${params.directionId}`}>
						<Button size={'icon'} variant={'outline'}>
							<ChevronLeftCircle />
						</Button>
					</Link>
					<Header
						title={science.title}
						description='Manage your science and see how it is performing.'
					/>
				</div>
				<Action {...science} />
			</div>
			<Separator className='my-3 bg-muted-foreground' />

			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Books
						</span>{' '}
						<Settings2 />
					</div>
					<Books science={science} books={books} />
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Science field
						</span>{' '}
						<Settings />
					</div>
					<ScienceField {...science} />
				</div>
			</div>
		</>
	)
}

export default Page
