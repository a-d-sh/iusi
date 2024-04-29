// import { authOptions } from '@/libs/auth'
// import { PrismaClient } from '@prisma/client'
import { writeFile } from 'fs/promises'
// import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'
import path from 'path'
// const prisma = new PrismaClient()

export const POST = async (req, res) => {
	const formData = await req.formData()
	// const session = await getServerSession(
	// 	req,
	// 	{
	// 		...res,
	// 		getHeader: name => res.headers?.get(name),
	// 		setHeader: (name, value) => res.headers?.set(name, value),
	// 	},
	// 	authOptions
	// )
	// console.log('session', session)

	const file = formData.get('file')
	if (!file) {
		return NextResponse.json({ error: 'No files received.' }, { status: 400 })
	}

	const buffer = Buffer.from(await file.arrayBuffer())
	const filename = file.name.replaceAll(' ', '_')
	console.log(filename)
	try {
		await writeFile(path.join(process.cwd(), 'public/book/' + filename), buffer)

		// const res = await prisma.files.create({
		// 	data: {
		// 		file: filename,
		// 		title: 'Title of ' + filename,
		// 		userId: session.user.id,
		// 	},
		// })
		// console.log(res)
		return NextResponse.json({ Message: 'Success', status: 201 })
	} catch (error) {
		console.log('Error occured ', error)
		return NextResponse.json({ Message: 'Failed', status: 500 })
	}
}

// export const GET = async (req, res) => {
// 	const user = await getUser(req, res)
// 	const files = await prisma.files.findMany({
// 		where: {
// 			userId: user.id,
// 		},
// 	})
// 	console.log(files)

// 	return Response.json({ files })
// }

// async function getUser(req, res) {
// 	const session = await getServerSession(
// 		req,
// 		{
// 			...res,
// 			getHeader: name => res.headers?.get(name),
// 			setHeader: (name, value) => res.headers?.set(name, value),
// 		},
// 		authOptions
// 	)
// 	return session.user
// }
