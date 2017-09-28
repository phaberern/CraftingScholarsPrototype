import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';

const routes = {

	component: Base,

	childRoutes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path: '/login',
			component: LoginForm
		},
		{
			path: '/signup',
			component: SignUpForm
		}
	]
};

export default routes;