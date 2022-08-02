import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<main className='home'>
			<section className='home__nav'>
				<p className='home__title'>Edytuj dane</p>
				<NavLink className={'home__link'} to='/pricelist'>
					Cennik
				</NavLink>
				<NavLink className={'home__link'} to='/contact'>
					Kontakt
				</NavLink>
			</section>
		</main>
	);
};

export default Home;
