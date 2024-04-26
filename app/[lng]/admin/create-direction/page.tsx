import DirectionFieldsForm from '@/components/forms/direction-fields.form'
import { Separator } from '@/components/ui/separator'
import Header from '../../../../components/shared/header'

function Page() {
	return (
		<>
			<Header
				title='Create a direction'
				description='Fill in the details below to create a new direction'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-space-grotesk text-lg font-medium'>
					Direction qo`shish
				</h3>
				<Separator className='my-3' />
				<DirectionFieldsForm />
			</div>
		</>
	)
}

export default Page
