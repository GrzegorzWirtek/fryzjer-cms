import { ServicesActionType } from '../action-types';
import { ServicesAction, serviceType } from '../actions';

const initialState = [] as serviceType[];

const reducer = (
	state: serviceType[] = initialState,
	action: ServicesAction,
) => {
	switch (action.type) {
		case ServicesActionType.GET_SERVICES:
			return action.payload;
		case ServicesActionType.UPDATE_SERVICE:
			return action.payload;
		case ServicesActionType.ADD_SERVICE:
			return action.payload;
		case ServicesActionType.DELETE_SERVICE:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
