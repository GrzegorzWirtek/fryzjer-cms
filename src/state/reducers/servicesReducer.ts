import { ServicesActionType } from '../action-types';
import { ServicesAction } from '../actions';

const initialState: {
	_id: number;
	text: string;
	price: number;
}[] = [];

const reducer = (
	state: typeof initialState = initialState,
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
