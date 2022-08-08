import axios from 'axios';

const URL = 'http://localhost:3001/';
const LOGIN = 'login';
const SERVICES = 'services';
const CONTACT = 'contact';

export type contactDataType = {
	street: string;
	buildingNr: number;
	apartmentNr: number;
	zipCode: number;
	city: string;
	info: string;
	tel: number;
};

export const checkLogin = (loginData: { login: string; password: string }) =>
	axios.post(`${URL}${LOGIN}`, { loginData });

export const getServices = () => axios.get(`${URL}${SERVICES}`);

export const deleteService = (_id: number) =>
	axios.delete(`${URL}${SERVICES}/${_id}`);

export const addService = (services: { text: string; price: number }[]) =>
	axios.post(`${URL}${SERVICES}`, { services });

export const updateService = (service: {
	_id: number;
	text: string;
	price: number;
}) => axios.post(`${URL}${SERVICES}/updateone`, { service });

export const getContact = () => axios.get(`${URL}${CONTACT}`);

export const updateContact = (contactData: contactDataType) =>
	axios.post(`${URL}${CONTACT}`, { contactData });
