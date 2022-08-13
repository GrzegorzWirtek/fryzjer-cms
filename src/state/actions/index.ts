import {
	LoginActionType,
	ServicesActionType,
	FormsVisibilityActionType,
} from '../action-types';

interface CheckLogin {
	type: LoginActionType.CHECK;
	payload: {
		login: boolean;
		password: boolean;
		isLoggedIn: boolean;
		firstVisit: boolean;
	};
}

interface LogOut {
	type: LoginActionType.LOGOUT;
	payload: {
		login: boolean;
		password: boolean;
		isLoggedIn: boolean;
		firstVisit: boolean;
	};
}

interface ShowForm {
	type: FormsVisibilityActionType.SHOW;
	payload: {
		formName: string;
		currentId: number;
	};
}

interface HideForm {
	type: FormsVisibilityActionType.HIDE;
}

interface GetServices {
	type: ServicesActionType.GET_SERVICES;
	payload: {
		_id: number;
		text: string;
		price: number;
	}[];
}

interface UpdateService {
	type: ServicesActionType.UPDATE_SERVICE;
	payload: {
		_id: number;
		text: string;
		price: number;
	}[];
}

export type LoginAction = CheckLogin | LogOut;
export type FormsVisibilityAction = ShowForm | HideForm;
export type ServicesAction = GetServices | UpdateService;
