import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, LeaderBoard, Login, Register } from '../pages/Student';
import {
	AdminAssignmentResult,
	AdminAssignments,
	AdminHome,
	AdminLogin,
	AdminQuizzes,
	AdminVideos,
} from '../pages/Admin';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Assignment from '../pages/Student/Assignment/Assignment';
import Quizs from '../pages/Student/Quizs/Quizs';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: (
					<PublicRoute>
						<Login />
					</PublicRoute>
				),
			},
			{
				path: '/register',
				element: (
					<PublicRoute>
						<Register />
					</PublicRoute>
				),
			},
			{
				path: '/home',
				element: (
					<PrivateRoute>
						<Home />
					</PrivateRoute>
				),
			},
			{
				path: '/home/:id',
				element: (
					<PrivateRoute>
						<Home />
					</PrivateRoute>
				),
			},
			{
				path: '/video/:id',
				element: (
					<PrivateRoute>
						<Home />
					</PrivateRoute>
				),
			},
			{
				path: '/quiz/:id',
				element: (
					<PrivateRoute>
						<Quizs />
					</PrivateRoute>
				),
			},
			{
				path: '/assignment/:id',
				element: (
					<PrivateRoute>
						<Assignment />
					</PrivateRoute>
				),
			},
			{
				path: '/leader-board',
				element: (
					<PrivateRoute>
						<LeaderBoard />
					</PrivateRoute>
				),
			},
			{
				path: '/admin',
				element: (
					<PublicRoute>
						<AdminLogin />
					</PublicRoute>
				),
			},
			{
				path: '/admin/home',
				element: (
					<PrivateRoute>
						<AdminHome />
					</PrivateRoute>
				),
			},
			{
				path: '/admin/videos',
				element: (
					<PrivateRoute>
						<AdminVideos />
					</PrivateRoute>
				),
			},
			{
				path: '/admin/assignments',
				element: (
					<PrivateRoute>
						<AdminAssignments />
					</PrivateRoute>
				),
			},
			{
				path: '/admin/assignment-result',
				element: (
					<PrivateRoute>
						<AdminAssignmentResult />
					</PrivateRoute>
				),
			},
			{
				path: '/admin/quiz',
				element: (
					<PrivateRoute>
						<AdminQuizzes />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default routes;
