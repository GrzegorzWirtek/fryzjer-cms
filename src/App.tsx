import './App.css';
import Nav from './components/Nav/Nav';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Nav />
				<Router />
			</HashRouter>
		</div>
	);
}

export default App;
