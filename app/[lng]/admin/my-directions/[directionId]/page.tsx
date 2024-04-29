import { getDirectionById } from '@/actions/direction.action'
import { getSciences } from '@/actions/science.action'
import { Separator } from '@/components/ui/separator'
import { Images, LayoutPanelLeft, Settings } from 'lucide-react'
import Header from '../../../../../components/shared/header'
import Actions from './_components/actions'
import DirectionFields from './_components/direction-fields'
import PreviewImage from './_components/preview-image'
import Sciences from './_components/science'

async function Page({ params }: { params: { directionId: string } }) {
	const directionJSON = await getDirectionById(params.directionId)
	const sciencesJSON = await getSciences(params.directionId)

	const direction = JSON.parse(JSON.stringify(directionJSON))
	const sciences = JSON.parse(JSON.stringify(sciencesJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<Header
					title={direction.title}
					description='Manage your direction and see how it is performing.'
				/>
				<Actions {...direction} />
			</div>
			<Separator className='my-3 bg-muted-foreground' />

			<div className='mt-6 grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Major Fields
						</span>{' '}
						<Settings />
					</div>
					<DirectionFields {...direction} />
				</div>

				<div className='flex flex-col space-y-2'>
					{/* Sciences */}
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Major Sciences
						</span>{' '}
						<LayoutPanelLeft />
					</div>
					<Sciences direction={direction} sciences={sciences} />

					{/* Preview image */}
					<div className='flex items-center gap-2'>
						<span className='font-space-grotesk text-3xl font-medium'>
							Preview Image
						</span>{' '}
						<Images />
					</div>
					<PreviewImage {...direction} />
				</div>
			</div>
		</>
	)
}

export default Page
