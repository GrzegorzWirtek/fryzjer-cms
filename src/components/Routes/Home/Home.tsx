import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<main className='home'>
			<section className='home__nav'>
				<p className='home__title'>Edytuj informacje</p>
				<NavLink className={'home__link'} to='/services'>
					Cennik
				</NavLink>
				<NavLink className={'home__link'} to='/contact'>
					Kontakt
				</NavLink>
				<NavLink className={'home__link'} to='/galery'>
					Galeria
				</NavLink>
			</section>
		</main>
	);
};

export default Home;
