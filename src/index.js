import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import './scss/custom.scss'
import App from './App';
import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
	setToLS('all-themes', themes.default);
	return (
		<App />
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>
);