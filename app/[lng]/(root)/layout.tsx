import RefreshModal from '@/components/modals/refresh.modal'
import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
			<RefreshModal />
		</div>
	)
}

export default Layout
