import { getFeaturedCourses } from '@/actions/course.action'
import { getAdminInstructors } from '@/actions/user.action'
import Categories from './_components/categories'
import Hero from './_components/hero'

async function Page() {
	const courses = await getFeaturedCourses()
	const instructorData = await getAdminInstructors({ pageSize: 4 })

	return (
		<>
			<Hero />
			<Categories />
		</>
	)
}

export default Page
