import Contacts from './_components/contacts'
import Directions from './_components/directions'
import Hero from './_components/hero'
import Rektor from './_components/rektor'

async function Page() {
	return (
		<>
			<Hero />
			<Rektor />
			<Directions />
			<Contacts />
		</>
	)
}

export default Page
