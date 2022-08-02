import './App.css';
import Nav from './components/Nav/Nav';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';
import React, { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';

function App() {
	const [loginCorrect, setLoginCorrect] = useState(false);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			login: { value: string };
			password: { value: string };
		};
		const login = target.login.value;
		const password = target.password.value;

		console.log('to z login page', login, password);

		setLoginCorrect(true);
	};

	const handleLogout = () => {
		setLoginCorrect(false);
	};

	const content = loginCorrect ? (
		<HashRouter>
			<Nav handleLogout={handleLogout} />
			<Router />
		</HashRouter>
	) : (
		<LoginPage handleSubmit={handleSubmit} />
	);

	return (
		<div className='App'>
			<Header loginCorrect={loginCorrect} />
			{content}
		</div>
	);
}

export default App;
