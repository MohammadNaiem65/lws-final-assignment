import apiSlice from '../api/apiSlice';
import { login } from './authSlice';

const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (data) => ({
				url: '/register',
				method: 'POST',
				body: data,
			}),
		}),
		loginUser: builder.mutation({
			query: (data) => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;

				dispatch(login(data));
			},
		}),
		loginAdmin: builder.mutation({
			query: (data) => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				const { data } = await queryFulfilled;

				dispatch(login(data));
			},
		}),
	}),
});

export default authApi;
export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useLoginAdminMutation,
} = authApi;
