import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../../../features/videos/videosApi';
import { Error, Loading } from '../../../shared';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import RestVideos from './RestVideos/RestVideos';

export default function Home() {
	// hook
	const { id = 1 } = useParams();
	const { data: video, isLoading, isError, error } = useGetVideoQuery(id);

	// decide what to render
	if (isLoading) {
		return <Loading />;
	} else if (!isLoading && isError) {
		return <Error error={error} />;
	} else if (!isLoading && video?.id) {
		return (
			<section className='py-6 bg-primary'>
				<div className='mx-auto max-w-7xl px-5 lg:px-0'>
					<div className='grid grid-cols-3 gap-2 lg:gap-8'>
						<VideoPlayer video={video} />
						<RestVideos currVid={parseInt(id)} />
					</div>
				</div>
			</section>
		);
	}
}
