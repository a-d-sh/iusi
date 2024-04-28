'use client'

import axios from 'axios'
// import fs from 'fs/promises'
import { NextPage } from 'next'
// import Link from 'next/link'
// import path from 'path'
import { useState } from 'react'

interface Props {
	dirs: string[]
}

const Home: NextPage<Props> = ({ dirs }) => {
	const [uploading, setUploading] = useState(false)
	const [selectedImage, setSelectedImage] = useState('')
	const [selectedFile, setSelectedFile] = useState<File>()

	const handleUpload = async () => {
		setUploading(true)
		try {
			if (!selectedFile) return
			const formData = new FormData()
			formData.append('myBook', selectedFile)
			const { data } = await axios.post('/api/book', formData)
			console.log(data)
		} catch (error: any) {
			console.log(error.response?.data)
		}
		setUploading(false)
	}

	return (
		<div className='max-w-4xl mx-auto p-20 space-y-6'>
			<label>
				<input
					type='file'
					hidden
					onChange={({ target }) => {
						if (target.files) {
							const file = target.files[0]
							setSelectedImage(URL.createObjectURL(file))
							setSelectedFile(file)
						}
					}}
				/>
				<div className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
					{selectedImage ? (
						<img src={selectedImage} alt='' />
					) : (
						<span>Select file</span>
					)}
				</div>
			</label>
			<button
				onClick={handleUpload}
				disabled={uploading}
				style={{ opacity: uploading ? '.5' : '1' }}
				className='bg-red-600 p-3 w-32 text-center rounded text-white'
			>
				{uploading ? 'Uploading..' : 'Upload'}
			</button>
			{/* <div className='mt-20 flex flex-col space-y-3'>
				{dirs.map(item => (
					<Link
						key={item}
						href={'/book/' + item}
						className='text-blue-500 hover:underline'
					>
						{item}
					</Link>
				))}
			</div> */}
		</div>
	)
}
// export const getServerSideProps: GetServerSideProps = async () => {
// 	const props = {
// 		dirs: [],
// 	}

// 	try {
// 		const dirs = await fs.readdir(path.join(process.cwd(), '/public/book'))
// 		props.dirs = dirs as any
// 		return { props }
// 	} catch (error) {
// 		return { props }
// 	}
// }

export default Home
