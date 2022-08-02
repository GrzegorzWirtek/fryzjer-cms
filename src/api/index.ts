import axios from 'axios';

const URL = 'http://localhost:3001/';
const LOGIN = 'login';
const SERVICES = 'services';

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
