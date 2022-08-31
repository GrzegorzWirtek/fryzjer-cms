import {
	LoginActionType,
	ServicesActionType,
	FormsVisibilityActionType,
	ContactActionType,
	GaleryActionType,
	ProcessingActionType,
} from '../action-types';

export type loginType = {
	login: boolean;
	password: boolean;
	isLoggedIn: boolean;
	firstVisit: boolean;
};

interface CheckLogin {
	type: LoginActionType.CHECK;
	payload: loginType;
}

interface LogOut {
	type: LoginActionType.LOGOUT;
	payload: loginType;
}

interface ShowForm {
	type: FormsVisibilityActionType.SHOW;
	payload: {
		formName: string;
		currentId?: number;
	};
}

interface HideForm {
	type: FormsVisibilityActionType.HIDE;
}

export type serviceType = {
	_id: number;
	text: string;
	price: number;
};

interface GetServices {
	type: ServicesActionType.GET_SERVICES;
	payload: serviceType[];
}

interface UpdateService {
	type: ServicesActionType.UPDATE_SERVICE;
	payload: serviceType[];
}

interface AddService {
	type: ServicesActionType.ADD_SERVICE;
	payload: serviceType[];
}

interface DeleteService {
	type: ServicesActionType.DELETE_SERVICE;
	payload: serviceType[];
}

export type contactType = {
	street: string;
	buildingNr: number;
	apartmentNr: number;
	zipCode: string;
	city: string;
	info: string;
	tel: string;
};

interface GetContact {
	type: ContactActionType.GET_CONTACT;
	payload: contactType;
}

interface UpdateContact {
	type: ContactActionType.UPDATE_CONTACT;
	payload: contactType;
}

export type galeryType = { url: string; name: string }[];

interface GetImages {
	type: GaleryActionType.GET_IMAGES;
	payload: galeryType;
}

interface UploadImage {
	type: GaleryActionType.UPLOAD_IMAGE;
	payload: galeryType;
}

interface DeleteImage {
	type: GaleryActionType.DELETE_IMAGE;
	payload: galeryType;
}

export type processingType = boolean;

interface Processing {
	type: ProcessingActionType.PROCESSING;
	payload: processingType;
}

interface ProcessingDone {
	type: ProcessingActionType.PROCESSING_DONE;
	payload: processingType;
}

export type LoginAction = CheckLogin | LogOut;
export type FormsVisibilityAction = ShowForm | HideForm;
export type ServicesAction =
	| GetServices
	| UpdateService
	| AddService
	| DeleteService;
export type ContactAction = GetContact | UpdateContact;
export type GaleryAction = GetImages | UploadImage | DeleteImage;
export type ProcessingAction = Processing | ProcessingDone;
