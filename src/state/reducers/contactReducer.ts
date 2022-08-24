import { ContactActionType } from '../action-types';
import { ContactAction, contactType } from '../actions';

const initialState = {} as contactType;

const reducer = (state: contactType = initialState, action: ContactAction) => {
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
