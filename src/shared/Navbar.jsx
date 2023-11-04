import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { portalLogo } from '../assets';

export default function Navbar() {
	const auth = JSON.parse(localStorage.getItem('auth'));
	const dispatch = useDispatch();

	// handle logout process
	const handleLogout = () => {
		dispatch(logout());

		localStorage.clear();
	};

	return (
		<nav className='shadow-md'>
			<div className='max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3'>
				<Link
					to={
						auth?.user?.role === 'student' ? '/home' : '/admin/home'
					}>
					<img className='h-10' src={portalLogo} />
				</Link>
				<div className='flex items-center gap-3'>
					<Link
						to={
							auth?.user?.role === 'student'
								? '/leader-board'
								: '/admin/home'
						}
						className='font-bold'>
						{auth?.user?.role === 'student'
							? 'Leader-Board'
							: 'Dashboard'}
					</Link>
					<h2 className='font-bold capitalize'>{auth?.user?.role}</h2>
					<button
						className='flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan '
						onClick={handleLogout}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
							/>
						</svg>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
}
