import { LoginActionType } from '../action-types';
import { LoginAction } from '../actions';

const initialState = {
	login: false,
	password: false,
	isLoggedIn: false,
	firstVisit: true,
};

const reducer = (
	state: typeof initialState = initialState,
	action: LoginAction,
) => {
	switch (action.type) {
		case LoginActionType.CHECK:
			return action.payload;
		case LoginActionType.LOGOUT:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
