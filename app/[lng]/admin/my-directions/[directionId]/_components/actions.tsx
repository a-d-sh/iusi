'use client'

import { deleteDirection, updateDirection } from '@/actions/direction.action'
import { IDirection } from '@/app.types'
import ConfirmDeleteModal from '@/components/modals/confirm-delete.modal'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

function Actions(direction: IDirection) {
	const pathname = usePathname()
	const router = useRouter()

	const onUpdateStatus = () => {
		let promise

		if (direction.published) {
			promise = updateDirection(direction._id, { published: false }, pathname)
		} else {
			promise = updateDirection(direction._id, { published: true }, pathname)
		}

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
			error: 'Something went wrong!',
		})
	}

	const onDelete = () => {
		const promise = deleteDirection(
			direction._id,
			'/en/admin/my-directions'
		).then(() => router.push('/en/admin/my-directions'))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully deleted!',
			error: 'Something went wrong!',
		})
	}

	return (
		<div className='flex gap-2 self-end'>
			<Button onClick={onUpdateStatus}>
				{direction.published ? 'Draft' : 'Publish'}
			</Button>
			<ConfirmDeleteModal onConfirm={onDelete}>
				<Button variant={'destructive'}>Delete</Button>
			</ConfirmDeleteModal>
		</div>
	)
}

export default Actions
