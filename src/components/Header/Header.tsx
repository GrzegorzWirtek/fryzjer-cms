import './Header.scss';

interface propsType {
	loginCorrect: boolean;
}

const Header: React.FC<propsType> = ({ loginCorrect }) => {
	return (
		<header className={`header ${loginCorrect ? 'header--login' : ''}`}>
			<h1
				className={`header__title ${
					loginCorrect ? 'header__title--login' : ''
				}`}>
				Fryzjer męski
				<p
					className={`header__subtitle ${
						loginCorrect ? 'header__subtitle--login' : ''
					}`}>
					{' '}
					CMS
				</p>
			</h1>
		</header>
	);
};

export default Header;
