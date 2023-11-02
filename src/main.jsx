import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes/routes.jsx';
import store from './app/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={routes}>
			<Provider store={store}>
				<App />
			</Provider>
		</RouterProvider>
	</React.StrictMode>
);
