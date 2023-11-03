import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginAdminMutation } from '../../../../features/auth/authApi';
import { handleDebounce, ifUserExists, validateEmail } from '../../../../utils';
import { useNavigate } from 'react-router-dom';

export default function Form() {
	// hooks
	const [loginAdmin, { isSuccess, isError, error: processError }] =
		useLoginAdminMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// local states
	const [adminDetails, setAdminDetails] = useState({
		email: '',
		pass: '',
	});
	const [error, setError] = useState('');

	// set email address
	const setEmailAddress = async (e) => {
		setError('');
		const email = await handleDebounce(e.target.value);
		const validEmail = validateEmail(email);

		if (validEmail) {
			const result = await ifUserExists(validEmail[0], dispatch);

			if (result && result[0].role === 'admin') {
				setAdminDetails((prev) => ({
					...prev,
					email: result[0].email,
				}));
			} else {
				setError('No admin exists with that email.');
			}
		}
	};

	// handle login process
	const handleLoginAdmin = (e) => {
		e.preventDefault();
		const data = {
			email: adminDetails.email,
			password: adminDetails.pass,
		};

		loginAdmin(data);
	};

	// handle login process result
	useEffect(() => {
		if (isSuccess) {
			navigate('/admin/home');
		} else if (isError) {
			setError(processError.data);
		}
	}, [navigate, isSuccess, isError, processError?.data]);

	return (
		<form className='mt-8 space-y-6' onSubmit={handleLoginAdmin}>
			<div className='rounded-md shadow-sm -space-y-px'>
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
						onChange={setEmailAddress}
					/>
				</div>
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
						value={adminDetails.pass}
						onChange={(e) =>
							setAdminDetails((prev) => ({
								...prev,
								pass: e.target.value,
							}))
						}
					/>
				</div>
			</div>

			<div className='flex items-center justify-end'>
				<div className='text-sm'>
					<a
						href='#'
						className='font-medium text-violet-600 hover:text-violet-500'>
						Forgot your password?
					</a>
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
