import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Galery from './Galery/Galery';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/services' element={<Services />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/galery' element={<Galery />} />
		</Routes>
	);
};

export default Router;
