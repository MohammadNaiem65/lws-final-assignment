export default function LoginForm() {
	return (
		<form className='mt-8 space-y-6'>
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
					/>
				</div>
			</div>

			<div className='flex items-center justify-end'>
				<div className='text-sm'>
					<a
						href='./StudentReistration.html'
						className='font-medium text-violet-600 hover:text-violet-500'>
						Create New Account
					</a>
				</div>
			</div>

			<div>
				<button
					type='submit'
					className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
					Sign in
				</button>
			</div>
		</form>
	);
}