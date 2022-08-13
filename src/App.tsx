import './App.css';
import Nav from './components/Nav/Nav';
import { HashRouter } from 'react-router-dom';
import Router from './components/Routes/Router';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';
import { StateType } from './state/reducers';
import { useSelector } from 'react-redux';

function App() {
	const { isLoggedIn } = useSelector((state: StateType) => state.login);

	const content = isLoggedIn ? (
		<HashRouter>
			<Nav />
			<Router />
		</HashRouter>
	) : (
		<LoginPage />
	);

	return (
		<div className='App'>
			<Header />
			{content}
		</div>
	);
}

export default App;
