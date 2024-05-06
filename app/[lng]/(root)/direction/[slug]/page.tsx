import { getDetailedDirection } from '@/actions/direction.action'
import TopBar from '@/components/shared/top-bar'
import { Metadata, ResolvingMetadata } from 'next'
import Hero from './_components/hero'
import Overview from './_components/overview'

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const direction = await getDetailedDirection(params.slug!)

	return {
		title: direction.title,
		openGraph: {
			images: direction.previewImage,
			title: direction.title,
		},
		keywords: direction.tags,
	}
}

interface Props {
	params: { lng: string; slug: string }
}
async function Page({ params: { lng, slug } }: Props) {
	const directionJSON = await getDetailedDirection(slug)

	const direction = JSON.parse(JSON.stringify(directionJSON))

	return (
		<>
			<TopBar label='Elektron Kutubxona' extra={direction.title} />

			<div className='container mx-auto max-w-6xl'>
				<div className='grid grid-cols-3 gap-4 pt-12'>
					<div className='col-span-2 max-lg:col-span-3'>
						<Hero {...direction} />
						<Overview {...direction} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
