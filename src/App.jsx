import { Outlet, useLocation } from 'react-router-dom';
import { useAuthCheck } from './hooks';
import { Navbar } from './shared';
import './App.css';

function App() {
	// hooks
	const authChecked = useAuthCheck();
	// get path
	const location = useLocation();

	return (
		authChecked && (
			<>
				{/* Don't render Navbar if user is not logged in */}
				{location.pathname !== '/' &&
					location.pathname !== '/register' &&
					location.pathname !== '/admin' && <Navbar />}
				<Outlet />
			</>
		)
	);
}

export default App;
