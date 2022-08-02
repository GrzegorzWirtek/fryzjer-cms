import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Pricelist from './Pricelist/Pricelist';
import Contact from './Contact/Contact';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/pricelist' element={<Pricelist />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
};

export default Router;
