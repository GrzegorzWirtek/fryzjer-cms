import * as api from '../../api';
import {
	LoginActionType,
	ServicesActionType,
	FormsVisibilityActionType,
	ContactActionType,
	GaleryActionType,
} from '../action-types';
import {
	LoginAction,
	ServicesAction,
	serviceType,
	FormsVisibilityAction,
	ContactAction,
	contactType,
	GaleryAction,
} from '../actions';
import { Dispatch } from 'react';

export const CheckLogin = (loginData: { login: string; password: string }) => {
	return async (dispatch: Dispatch<LoginAction>) => {
		try {
			const {
				data: { login, password },
			} = await api.checkLogin(loginData);

			const newLoginDetails = {
				login,
				password,
				isLoggedIn: false,
				firstVisit: false,
			};

			if (login && password) {
				newLoginDetails.isLoggedIn = true;
			}

			dispatch({
				type: LoginActionType.CHECK,
				payload: newLoginDetails,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const LogOut = () => {
	return (dispatch: Dispatch<LoginAction>) => {
		const resetLoginDetails = {
			login: false,
			password: false,
			isLoggedIn: false,
			firstVisit: true,
		};

		dispatch({
			type: LoginActionType.CHECK,
			payload: resetLoginDetails,
		});
	};
};

export const ShowForm =
	(formNameAndServiceId: { formName: string; currentId?: number }) =>
	(dispatch: Dispatch<FormsVisibilityAction>) => {
		dispatch({
			type: FormsVisibilityActionType.SHOW,
			payload: formNameAndServiceId,
		});
	};

export const HideForm = () => (dispatch: Dispatch<FormsVisibilityAction>) => {
	dispatch({
		type: FormsVisibilityActionType.HIDE,
	});
};

export const GetServices = () => async (dispatch: Dispatch<ServicesAction>) => {
	try {
		const { data } = await api.getServices();

		dispatch({
			type: ServicesActionType.GET_SERVICES,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const UpdateService =
	(service: serviceType) => async (dispatch: Dispatch<ServicesAction>) => {
		try {
			const { data } = await api.updateService(service);

			dispatch({
				type: ServicesActionType.UPDATE_SERVICE,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

export const AddService =
	(services: { text: string; price: number }[]) =>
	async (dispatch: Dispatch<ServicesAction>) => {
		try {
			const { data } = await api.addService(services);

			dispatch({
				type: ServicesActionType.ADD_SERVICE,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

export const DeleteService =
	(_id: number) => async (dispatch: Dispatch<ServicesAction>) => {
		try {
			const { data } = await api.deleteService(_id);

			dispatch({
				type: ServicesActionType.DELETE_SERVICE,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

export const GetContact = () => async (dispatch: Dispatch<ContactAction>) => {
	try {
		const { data } = await api.getContact();

		dispatch({
			type: ContactActionType.GET_CONTACT,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const UpdateContact =
	(contact: contactType) => async (dispatch: Dispatch<ContactAction>) => {
		try {
			const { data } = await api.updateContact(contact);

			dispatch({
				type: ContactActionType.UPDATE_CONTACT,
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};

export const GetImages = () => async (dispatch: Dispatch<GaleryAction>) => {
	try {
		const data = await api.getImages();
		dispatch({
			type: GaleryActionType.GET_IMAGES,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};
