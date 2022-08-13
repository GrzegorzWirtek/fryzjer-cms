import './Nav.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const Nav = () => {
	const [popupVisible, setPopupVisible] = useState(false);
	const dispatch = useDispatch();
	const { LogOut } = bindActionCreators(actionCreators, dispatch);
	const navigate = useNavigate();

	const handleCancel = () => {
		setPopupVisible(false);
	};

	const handleSubmit = () => {
		navigate('/');
		LogOut();
	};

	return (
		<>
			{popupVisible && (
				<Popup
					text='Czy na pewno chcesz wylogować?'
					handleNo={handleCancel}
					handleYes={handleSubmit}
				/>
			)}
			<nav className='nav'>
				<NavLink className={'nav__link'} to='/pricelist'>
					Cennik
				</NavLink>
				<NavLink className={'nav__link'} to='/contact'>
					Kontakt
				</NavLink>
				<p
					className='nav__link nav__link--logout'
					onClick={() => setPopupVisible(true)}>
					Wyloguj
				</p>
			</nav>
		</>
	);
};

export default Nav;
