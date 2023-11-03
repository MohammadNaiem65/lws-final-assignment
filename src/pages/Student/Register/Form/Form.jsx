import { useEffect, useState } from 'react';
import { validatePassword } from '../../../../utils';
import { useRegisterUserMutation } from '../../../../features/auth/authApi';
import { useNavigate } from 'react-router-dom';

export default function Form() {
	// Hooks
	const [registerUser, { isSuccess, isError, error: processError }] =
		useRegisterUserMutation();
	const navigate = useNavigate();

	// Local states
	const [userDetails, setUserDetails] = useState({
		name: '',
		email: '',
		pass: '',
		confPass: '',
	});
	const [error, setError] = useState('');

	// Handle register process
	const handleRegisterProcess = (e) => {
		e.preventDefault();
		setError('');
		const { name, email, pass, confPass } = userDetails;

		const { password, error: passErr } = validatePassword(pass, confPass);

		if (password) {
			const data = {
				name,
				email,
				password,
				role: 'student',
			};

			registerUser(data);
		} else {
			setError(passErr);
		}
	};

	// handle process result
	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		} else if (isError) {
			setError(processError.data);
		}
	}, [navigate, isSuccess, isError, processError]);

	return (
		<form className='mt-8 space-y-6' onSubmit={handleRegisterProcess}>
			<div className='rounded-md shadow-sm -space-y-px'>
				{/* Name */}
				<div>
					<label htmlFor='name' className='sr-only'>
						Name
					</label>
					<input
						id='name'
						name='name'
						type='name'
						autoComplete='name'
						required
						className='login-input rounded-t-md'
						placeholder='Student Name'
						value={userDetails.name}
						onChange={(e) =>
							setUserDetails((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
					/>
				</div>

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
						className='login-input '
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
						className='login-input'
						placeholder='Password'
						value={userDetails.pass}
						onChange={(e) =>
							setUserDetails((prev) => ({
								...prev,
								pass: e.target.value,
							}))
						}
					/>
				</div>

				{/* Confirm Password */}
				<div>
					<label htmlFor='confirm-password' className='sr-only'>
						Confirm Password
					</label>
					<input
						id='confirm-password'
						name='confirm-password'
						type='password'
						autoComplete='confirm-password'
						required
						className='login-input rounded-b-md'
						placeholder='Confirm Password'
						value={userDetails.confPass}
						onChange={(e) =>
							setUserDetails((prev) => ({
								...prev,
								confPass: e.target.value,
							}))
						}
					/>
				</div>
			</div>

			<button
				type='submit'
				className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
				Create Account
			</button>

			{error && (
				<p className='px-3 py-2 font-medium bg-red-500/40 text-red-600 text-center rounded'>
					{error}
				</p>
			)}
		</form>
	);
}
