import apiSlice from '../api/apiSlice';

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
		}),
		loginAdmin: builder.mutation({
			query: (data) => ({
				url: '/login',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export default authApi;
export const { useRegisterUserMutation, useLoginUserMutation, useLoginAdminMutation } = authApi;
