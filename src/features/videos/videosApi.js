import apiSlice from '../api/apiSlice';

const videosApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getVideo: builder.query({
			query: (id) => `/videos/${id}`,
		}),
		getRelatedVideos: builder.query({
			query: () => '/videos',
		}),
	}),
});

export default videosApi;
export const { useGetVideoQuery, useGetRelatedVideosQuery } = videosApi;
