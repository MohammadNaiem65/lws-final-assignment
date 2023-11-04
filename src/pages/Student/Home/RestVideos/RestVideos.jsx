import { useGetVideosQuery } from '../../../../features/videos/videosApi';
import { Loading } from '../../../../shared';
import Video from './Video/Video';

export default function RestVideos() {
	// hooks
	const { data: videos, isLoading, isError, error } = useGetVideosQuery();

	// decide what to render

	return (
		<div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30'>
			{/* {videos?.length &&
				videos.map((video) => <Video key={video.id} video={video} />)} */}

			<Loading />
		</div>
	);
}
