import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Services from './Services/Services';
import Contact from './Contact/Contact';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/services' element={<Services />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default Router;
