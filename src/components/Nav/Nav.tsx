import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='nav'>
			<NavLink className={'link'} to='/pricelist'>
				Cennik
			</NavLink>
		</nav>
	);
};

export default Nav;
