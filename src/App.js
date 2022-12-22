import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './lib/styles/striferral.css';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import DashboardMain from './pages/dashboard/DashboardMain';
import DashboardSettings from './pages/dashboard/DashboardSettings';
import Error from './pages/error';
import Faqs from './pages/faqs';
import Forgot from './pages/forgot';
import Homepage from './pages/home';
import Home from './pages/home/Home';
import Register from './pages/register';
import Signin from './pages/signin';
import Test from './pages/test';
// import { ROUTES } from './Routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* {
					Object.keys(ROUTES).filter((route) => {
						if (route === 'get') return false;
						if (route === 'link') return false;
						return true;
					})
						.map((current_route) => {
							const { path, component } = ROUTES[current_route];
							return <Route key={path} path={path} element={component} />
						})
				} */}

				<Route path="/" element={<Homepage />}>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/about" element={<About />} />
					<Route path="/faqs" element={<Faqs />} />
					<Route path="/forgot" element={<Forgot />} />
				</Route>
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="/dashboard" element={<DashboardMain />} />
					<Route path="/dashboard/settings" element={<DashboardSettings />} />
				</Route>
				<Route path="test" element={<Test />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
