'use client'

import { deleteScience } from '@/actions/science.action'
import { IScience } from '@/app.types'
import ConfirmDeleteModal from '@/components/modals/confirm-delete.modal'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

function Action(science: IScience) {
	const router = useRouter()

	const onDelete = () => {
		const path = `/en/admin/my-direction/${science.direction}`
		const promise = deleteScience(science._id, path).then(() =>
			router.push(path)
		)

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully deleted!',
			error: 'Something went wrong!',
		})
	}

	return (
		<ConfirmDeleteModal onConfirm={onDelete}>
			<Button className='self-end' variant={'destructive'}>
				Delete
			</Button>
		</ConfirmDeleteModal>
	)
}

export default Action
