import { useGetVideosQuery } from '../../../../features/videos/videosApi';
import { Error, Loading, NoContent } from '../../../../shared';
import Video from './Video/Video';

export default function RestVideos() {
	// hooks
	const { data: videos, isLoading, isError, error } = useGetVideosQuery();

	// decide what to render
	let content;

	if (isLoading) {
		content = <Loading />;
	} else if (!isLoading && isError) {
		content = <Error error={error} />;
	} else if (!isLoading && videos.length === 0) {
		content = <NoContent />;
	} else if (!isLoading && videos.length > 0) {
		content = (
			<>
				{videos?.map((video, index) => (
					<Video key={index} video={video} />
				))}
			</>
		);
	}

	return (
		<div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30'>
			{content}
		</div>
	);
}
