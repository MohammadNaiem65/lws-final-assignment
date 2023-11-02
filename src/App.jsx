import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import { Navbar } from './shared';

function App() {
	// get path
	const location = useLocation();

	return (
		<>
			{/* Don't render Navbar if user is not logged in */}
			{location.pathname !== '/' &&
				location.pathname !== '/register' &&
				location.pathname !== '/admin' && <Navbar />}
			<Outlet />
		</>
	);
}

export default App;
