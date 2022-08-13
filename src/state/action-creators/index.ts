import * as api from '../../api';
import {
	LoginActionType,
	ServicesActionType,
	FormsVisibilityActionType,
} from '../action-types';
import { LoginAction, ServicesAction, FormsVisibilityAction } from '../actions';
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
	(formNameAndServiceId: { formName: string; currentId: number }) =>
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
	(service: { _id: number; text: string; price: number }) =>
	async (dispatch: Dispatch<ServicesAction>) => {
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
