import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../../features/auth/authApi';

export default function LoginForm() {
	// hooks
	const [
		loginUser,
		{ data: loginResult, isSuccess, isError, error: processError },
	] = useLoginUserMutation();
	const navigate = useNavigate();

	// local states
	const [userDetails, setUserDetails] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	// handle process login
	const handleLogin = (e) => {
		e.preventDefault();
		setError('');

		loginUser(userDetails);
	};

	// handle process result
	useEffect(() => {
		if (isSuccess) {
			localStorage.setItem('auth', JSON.stringify(loginResult));

			navigate('/home');
		} else if (isError) {
			setError(processError.data);
		}
	}, [navigate, loginResult, isSuccess, isError, processError]);

	return (
		<form className='mt-8 space-y-6' onSubmit={handleLogin}>
			<div className='rounded-md shadow-sm -space-y-px'>
				{/* Email */}
				<div>
					<label htmlFor='email-address' className='sr-only'>
						Email address
					</label>
					<input
						id='email-address'
						name='email'
						type='email'
						autoComplete='email'
						required
						className='login-input rounded-t-md'
						placeholder='Email address'
						value={userDetails.email}
						onChange={(e) =>
							setUserDetails((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
					/>
				</div>
				{/* Password */}
				<div>
					<label htmlFor='password' className='sr-only'>
						Password
					</label>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						className='login-input rounded-b-md'
						placeholder='Password'
						value={userDetails.password}
						onChange={(e) =>
							setUserDetails((prev) => ({
								...prev,
								password: e.target.value,
							}))
						}
					/>
				</div>
			</div>

			<div className='flex items-center justify-end'>
				<div className='text-sm'>
					<Link
						to='./register'
						className='font-medium text-violet-600 hover:text-violet-500'>
						Create New Account
					</Link>
				</div>
			</div>

			<button
				type='submit'
				className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
				Sign in
			</button>

			{error && (
				<p className='px-3 py-2 font-medium bg-red-500/40 text-red-600 text-center rounded'>
					{error}
				</p>
			)}
		</form>
	);
}
