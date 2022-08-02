import React from 'react';
import './LoginPage.scss';

interface propsType {
	handleSubmit: (e: React.SyntheticEvent) => void;
}

const LoginPage: React.FC<propsType> = ({ handleSubmit }) => {
	return (
		<div className='login-page'>
			<form className='login-form' onSubmit={handleSubmit}>
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
