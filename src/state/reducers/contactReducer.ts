import { ContactActionType } from '../action-types';
import { ContactAction } from '../actions';

const initialState = {
	street: '',
	buildingNr: 0,
	apartmentNr: 0,
	zipCode: '',
	city: '',
	info: '',
	tel: '',
};

const reducer = (
	state: typeof initialState = initialState,
	action: ContactAction,
) => {
	switch (action.type) {
		case ContactActionType.GET_CONTACT:
			return action.payload;
		case ContactActionType.UPDATE_CONTACT:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
