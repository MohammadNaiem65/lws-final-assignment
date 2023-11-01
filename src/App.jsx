import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import { Navbar } from './shared';

function App() {
	// get path
	const location = useLocation();
	return (
		<>
			{location.pathname !== '/' &&
				location.pathname !== '/register' &&
				location.pathname !== '/admin' && <Navbar />}
			<Outlet />
		</>
	);
}

export default App;
