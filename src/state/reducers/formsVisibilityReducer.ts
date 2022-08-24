import { FormsVisibilityActionType } from '../action-types';
import { FormsVisibilityAction } from '../actions';

const initialState = {
	serviceEditForm: false,
	serviceAddForm: false,
	contactForm: false,
	galeryForm: false,
	currentId: 0,
};

const reducer = (
	state: typeof initialState = initialState,
	action: FormsVisibilityAction,
) => {
	switch (action.type) {
		case FormsVisibilityActionType.SHOW:
			return {
				...state,
				[action.payload.formName]: true,
				currentId: action.payload.currentId,
			};
		case FormsVisibilityActionType.HIDE:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
