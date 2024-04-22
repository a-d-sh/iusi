import Contacts from './_components/contacts'
import Directions from './_components/directions'
import Hero from './_components/hero'

async function Page() {
	return (
		<>
			<Hero />
			<Directions />
			<Contacts />
		</>
	)
}

export default Page
