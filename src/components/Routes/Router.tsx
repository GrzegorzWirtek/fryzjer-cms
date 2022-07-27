import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Pricelist from './Pricelist/Pricelist';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/pricelist' element={<Pricelist />} />
		</Routes>
	);
};

export default Router;
