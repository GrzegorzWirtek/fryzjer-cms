import axios from 'axios';
import { contactType, serviceType } from '../state/actions';
import {
	ref,
	uploadBytes,
	listAll,
	getDownloadURL,
	deleteObject,
	getMetadata,
} from 'firebase/storage';
import storage from '../firebase/firebase';

const URL = 'http://localhost:3001/';
const LOGIN = 'login';
const SERVICES = 'services';
const CONTACT = 'contact';

export const checkLogin = (loginData: { login: string; password: string }) =>
	axios.post(`${URL}${LOGIN}`, { loginData });

export const getServices = () => axios.get(`${URL}${SERVICES}`);

export const deleteService = (_id: number) =>
	axios.delete(`${URL}${SERVICES}/${_id}`);

export const addService = (services: { text: string; price: number }[]) =>
	axios.post(`${URL}${SERVICES}`, { services });

export const updateService = (service: serviceType) =>
	axios.post(`${URL}${SERVICES}/updateone`, { service });

export const getContact = () => axios.get(`${URL}${CONTACT}`);

export const updateContact = (contactData: contactType) =>
	axios.post(`${URL}${CONTACT}`, { contactData });

const imageListRef = ref(storage, 'images/');

export const getImages = async () => {
	const res = await listAll(imageListRef);
	let urls = res.items.map(async (item) => {
		const url = await getDownloadURL(item);
		const name = (await getMetadata(item)).fullPath;
		return { url, name };
	});
	return Promise.all(urls);
};

export const uploadImage = async (image: File) => {
	try {
		const imageName = `images/${Date.now() + image.name}`;
		const imageRef = ref(storage, imageName);
		await uploadBytes(imageRef, image);
	} catch (error) {
		console.log(error);
	}
};

export const deleteImage = async (imageName: string) => {
	const imageRef = ref(storage, imageName);
	try {
		await deleteObject(imageRef);
	} catch (error) {
		console.log(error);
	}
};
