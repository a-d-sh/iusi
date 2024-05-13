import Companies from './_components/companies'
import Contacts from './_components/contacts'
import Directions from './_components/directions'
import Facts from './_components/facts'
import Hero from './_components/hero'
import Rektor from './_components/rektor'

async function Page() {
	return (
		<>
			<Hero />
			<Rektor />
			<Directions />
			<Facts />
			<Companies />
			<Contacts />
		</>
	)
}

export default Page
