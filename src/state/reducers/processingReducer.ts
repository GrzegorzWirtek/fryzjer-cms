import { ProcessingActionType } from '../action-types';
import { ProcessingAction } from '../actions';

const initialState = true;

const reducer = (state: boolean = initialState, action: ProcessingAction) => {
	switch (action.type) {
		case ProcessingActionType.PROCESSING:
			return action.payload;
		case ProcessingActionType.PROCESSING_DONE:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
