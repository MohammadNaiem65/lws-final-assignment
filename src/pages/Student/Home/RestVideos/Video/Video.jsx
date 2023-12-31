import { Link } from 'react-router-dom';

export default function Video({ video, active }) {
	// local state
	const { id, title, views, duration } = video;

	// turn duration into desired format
	const createValidDuration = () => {
		const durationArr = duration.split(':');

		// if the max duration is lesser than a minute
		if (durationArr.length === 1) {
			return `0.${durationArr[0]} Mins`;
		} else if (durationArr.length > 1) {
			// if the max duration is more than a minute
			const minutes = durationArr[1].split('');
			const seconds = Number(minutes[1]) !== 0 ? Number(minutes[1]) : '';

			return `${durationArr[0]}.${minutes[0]}${seconds} ${
				durationArr.length === 3 ? 'Hours' : 'Mins'
			}`;
		}
	};

	return (
		<Link
			to={`/video/${id}`}
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
				<p
					className={`text-slate-50 text-sm ${
						active ? 'font-semibold' : 'font-normal'
					}`}>
					{title}
				</p>
				<div>
					<span className='text-gray-400 text-xs mt-1'>
						{createValidDuration()}
					</span>
					<span className='text-gray-400 text-xs mt-1'> | </span>
					<span className='text-gray-400 text-xs mt-1'>
						{views} views
					</span>
				</div>
			</div>
		</Link>
	);
}
