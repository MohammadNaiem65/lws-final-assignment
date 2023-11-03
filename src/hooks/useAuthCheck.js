import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

export default function useAuthCheck() {
	// hooks
	const dispatch = useDispatch();

	// local states
	const [authChecked, setAuthChecked] = useState(false);

	useEffect(() => {
		const localAuth = JSON.parse(localStorage.getItem('auth'));

		if (localAuth?.accessToken && localAuth?.user) {
			dispatch(login(localAuth));
		}

		setAuthChecked(true);
	}, [dispatch]);

	return authChecked;
}
