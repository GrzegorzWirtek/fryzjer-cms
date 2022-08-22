import './Nav.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Ham from './Ham/Ham';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const Nav = () => {
	const [hamActive, setHamActive] = useState(false);
	const [popupActive, setPopupActive] = useState(false);
	const dispatch = useDispatch();
	const { LogOut } = bindActionCreators(actionCreators, dispatch);
	const navigate = useNavigate();

	const toggleHam = () => {
		setHamActive((prev) => !prev);
	};

	const closeHam = () => {
		setHamActive(false);
	};

	const handlePopuYes = () => {
		LogOut();
		closeHam();
		navigate('/');
	};
	const handlePopuNo = () => {
		setPopupActive(false);
		closeHam();
	};

	const popup = popupActive ? (
		<Popup
			text={'Czy na pewno chcesz się wylogować?'}
			handleYes={handlePopuYes}
			handleNo={handlePopuNo}
		/>
	) : null;

	return (
		<>
			{popup}
			<Ham hamActive={hamActive} toggleHam={toggleHam} />
			<nav className={`nav ${hamActive ? 'nav--active' : ''}`}>
				<NavLink className={'nav__link'} to='/' onClick={closeHam}>
					Strona główna
				</NavLink>
				<NavLink className={'nav__link'} to='/services' onClick={closeHam}>
					Cennik
				</NavLink>
				<NavLink className={'nav__link'} to='/contact' onClick={closeHam}>
					Kontakt
				</NavLink>
				<p className={'nav__link'} onClick={() => setPopupActive(true)}>
					Wyloguj
				</p>
			</nav>
		</>
	);
};

export default Nav;
