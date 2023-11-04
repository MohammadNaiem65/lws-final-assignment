import apiSlice from '../api/apiSlice';

const videosApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => `/videos`,
		}),
	}),
});

export default videosApi;
