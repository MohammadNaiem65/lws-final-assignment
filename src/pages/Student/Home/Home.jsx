import VideoPlayer from './VideoPlayer/VideoPlayer';
import RestVideos from './RestVideos/RestVideos';

export default function Home() {
	return (
		<section className='py-6 bg-primary'>
			<div className='mx-auto max-w-7xl px-5 lg:px-0'>
				<div className='grid grid-cols-3 gap-2 lg:gap-8'>
					<VideoPlayer />
					<RestVideos />
				</div>
			</div>
		</section>
	);
}
