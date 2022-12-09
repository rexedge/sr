import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './lib/styles/striferral.css';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Pageone from './pages/dashboard/Pageone';
import Pagetwo from './pages/dashboard/Pagetwo';
import Error from './pages/error';
import Faqs from './pages/faqs';
import Homepage from './pages/home';
import Home from './pages/home/Home';
import Register from './pages/register';
import Signin from './pages/signin';
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
				</Route>
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="/dashboard" element={<Pageone />} />
					<Route path="/dashboard/pagetwo" element={<Pagetwo />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
