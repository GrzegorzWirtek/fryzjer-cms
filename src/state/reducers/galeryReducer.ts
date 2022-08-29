import { GaleryActionType } from '../action-types';
import { GaleryAction, galeryType } from '../actions';

const initialState = [] as galeryType;

const reducer = (state: galeryType = initialState, action: GaleryAction) => {
	switch (action.type) {
		case GaleryActionType.GET_IMAGES:
			return action.payload;
		case GaleryActionType.DELETE_IMAGE:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
