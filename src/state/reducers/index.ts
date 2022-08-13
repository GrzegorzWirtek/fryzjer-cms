import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import servicesReducer from './servicesReducer';
import formsVisibilityReducer from './formsVisibilityReducer';

const reducers = combineReducers({
	login: loginReducer,
	services: servicesReducer,
	formsVisibility: formsVisibilityReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
