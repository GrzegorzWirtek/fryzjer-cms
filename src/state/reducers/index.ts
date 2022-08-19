import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import servicesReducer from './servicesReducer';
import formsVisibilityReducer from './formsVisibilityReducer';
import contactReducer from './contactReducer';

const reducers = combineReducers({
	login: loginReducer,
	services: servicesReducer,
	formsVisibility: formsVisibilityReducer,
	contact: contactReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
