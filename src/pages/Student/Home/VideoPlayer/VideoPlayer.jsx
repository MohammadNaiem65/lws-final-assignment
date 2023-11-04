import { Link } from 'react-router-dom';

export default function VideoPlayer({ video }) {
	// destructure video property
	const { url, title, quizId, assignmentId, createdAt, description } = video;

	return (
		<div className='col-span-full w-full space-y-8 lg:col-span-2'>
			<iframe
				width='100%'
				className='aspect-video'
				src={url}
				title={title}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe>

			<div>
				<h1 className='text-lg font-semibold tracking-tight text-slate-100'>
					{title}
				</h1>
				<h2 className=' pb-4 text-sm leading-[1.7142857] text-slate-400'>
					Uploaded on{' '}
					{new Date(createdAt).toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</h2>

				<div className='flex gap-4'>
					{assignmentId && (
						<Link
							to={`/assignment/${assignmentId}`}
							className='px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary'>
							এসাইনমেন্ট
						</Link>
					)}

					{quizId && (
						<Link
							to={`/quiz/${quizId}`}
							className='px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary'>
							কুইজে অংশগ্রহণ করুন
						</Link>
					)}
				</div>
				<p className='mt-4 text-sm text-slate-400 leading-6'>
					{description}
				</p>
			</div>
		</div>
	);
}
