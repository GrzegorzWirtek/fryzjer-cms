import React, { useState } from 'react';
import * as api from '../../api';
import './LoginPage.scss';

// const handleSubmit = (e: React.SyntheticEvent) => {
// 	e.preventDefault();
// 	const target = e.target as typeof e.target & {
// 		login: { value: string };
// 		password: { value: string };
// 	};
// 	const login = target.login.value;
// 	const password = target.password.value;

// 	console.log('to z login page', login, password);
// 	checkLogin(login, password);

// 	setLoginCorrect(true);
// };

// const checkLogin = async (login: string, password: string) => {
// 	const { data } = await api.checkLogin({ login, password });
// 	console.log(data);
// };

interface propsType {
	handleSubmit: () => void;
}

const LoginPage: React.FC<propsType> = ({ handleSubmit }) => {
	const [message, setMessage] = useState('');

	const getInputsValue = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			login: { value: string };
			password: { value: string };
		};
		const login = target.login.value;
		const password = target.password.value;

		checkLogin(login, password);
	};

	const checkLogin = async (login: string, password: string) => {
		const { data } = await api.checkLogin({ login, password });
		console.log('to', data);

		if (!data.login) {
			setMessage('Błędny login');
		} else if (!data.password) {
			setMessage('Błędne hasło');
		} else handleSubmit();
	};

	return (
		<div className='login-page'>
			<p className='login-page__message'>{message}</p>
			<form className='login-form' onSubmit={getInputsValue}>
				<input
					type='text'
					name='login'
					className='login-form__input login-form__input--login'
					placeholder='Login'
					required
				/>
				<input
					type='text'
					name='password'
					className='login-form__input login-form__input--password'
					placeholder='Hasło'
					required
				/>
				<button className='login-form__button'>Zaloguj</button>
			</form>
		</div>
	);
};

export default LoginPage;
