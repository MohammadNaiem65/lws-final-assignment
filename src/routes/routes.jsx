import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, LeaderBoard, Login, Quiz, Register } from '../pages/Student';
import {
	AdminAssignmentResult,
	AdminAssignments,
	AdminHome,
	AdminLogin,
	AdminQuizzes,
	AdminVideos,
} from '../pages/Admin';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/quiz',
				element: <Quiz />,
			},
			{
				path: '/leader-board',
				element: <LeaderBoard />,
			},
			{
				path: '/admin',
				element: <AdminLogin />,
			},
			{
				path: '/admin/home',
				element: <AdminHome />,
			},
			{
				path: '/admin/videos',
				element: <AdminVideos />,
			},
			{
				path: '/admin/assignments',
				element: <AdminAssignments />,
			},
			{
				path: '/admin/assignment-result',
				element: <AdminAssignmentResult />,
			},
			{
				path: '/admin/quiz',
				element: <AdminQuizzes />,
			},
		],
	},
]);

export default routes;
