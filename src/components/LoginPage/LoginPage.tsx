import React, { useEffect, useState } from 'react';
import './LoginPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { StateType } from '../../state/reducers';
import Spinner from '../Spinner/Spinner';

const LoginPage = () => {
	const [message, setMessage] = useState('');
	const [checkingInProcess, setCheckingInProcess] = useState(false);

	const dispatch = useDispatch();
	const { CheckLogin } = bindActionCreators(actionCreators, dispatch);

	const { login, password, firstVisit } = useSelector(
		(state: StateType) => state.login,
	);

	useEffect(() => {
		let message = '';
		if (!login && !firstVisit) {
			message = 'Błędny login';
		} else if (!password && !firstVisit) {
			message = 'Błędne hasło';
		}
		setMessage(message);
	}, [login, password, firstVisit]);

	const getInputsValue = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setCheckingInProcess(true);
		const target = e.target as typeof e.target & {
			login: { value: string };
			password: { value: string };
		};
		const login = target.login.value;
		const password = target.password.value;

		await CheckLogin({ login, password });
		setCheckingInProcess(false);
	};

	return (
		<div className='login-page'>
			{checkingInProcess && <Spinner />}
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
