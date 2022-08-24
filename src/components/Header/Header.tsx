import './Header.scss';
import { StateType } from '../../state/reducers';
import { useSelector } from 'react-redux';

const Header = () => {
	const { isLoggedIn } = useSelector((state: StateType) => state.login);

	return (
		<header className={`header ${isLoggedIn ? 'header--login' : ''}`}>
			<h1
				className={`header__title ${isLoggedIn ? 'header__title--login' : ''}`}>
				Fryzjer Męski
				<p
					className={`header__subtitle ${
						isLoggedIn ? 'header__subtitle--login' : ''
					}`}>
					{' '}
					CMS
				</p>
			</h1>
		</header>
	);
};

export default Header;
