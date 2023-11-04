import { Link } from 'react-router-dom';

export default function Video({ video, active }) {
	// local state
	const { id, title, views, duration } = video;

	// turn duration to minute.second format
	const createValidDuration = () => {
		const durationArr = duration.split(':');
		const minutes = durationArr[1].split('');
		const seconds = Number(minutes[1]) !== 0 ? Number(minutes[1]) : '';

		return `${durationArr[0]}.${minutes[0]}${seconds}`;
	};

	return (
		<div
			className={`w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 ${
				active ? 'p-2' : 'py-3'
			}`}>
			{/* <!-- Thumbnail --> */}
			<svg
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='currentColor'
				className='w-6 h-6'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
				/>
			</svg>
			{/* <!-- Description --> */}
			<div className='w-full flex flex-col '>
				<Link to={`/video/${id}`}>
					<p
						className={`text-slate-50 text-sm ${
							active ? 'font-semibold' : 'font-normal'
						}`}>
						{title}
					</p>
				</Link>
				<div>
					<span className='text-gray-400 text-xs mt-1'>
						{createValidDuration()} Mins
					</span>
					<span className='text-gray-400 text-xs mt-1'> | </span>
					<span className='text-gray-400 text-xs mt-1'>
						{views} views
					</span>
				</div>
			</div>
		</div>
	);
}
