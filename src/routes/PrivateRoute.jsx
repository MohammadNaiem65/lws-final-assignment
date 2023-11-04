import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuthCheck } from '../hooks';

export default function PrivateRoute({ children }) {
	// hooks
	const { user, accessToken } = useSelector((state) => state.auth);
	const authChecked = useAuthCheck();

	if (!authChecked) {
		return;
	} else if (authChecked && user && accessToken) {
		return children;
	} else if (authChecked && !user && !accessToken) {
		return <Navigate to='/' replace />;
	}
}
