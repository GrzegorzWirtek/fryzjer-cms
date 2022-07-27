import axios from 'axios';

const URL = 'http://localhost:3001/';
const SERVICES = 'services';

export const getServices = () => axios.get(`${URL}${SERVICES}`);
// export const deleteService = (id:number) => axios.delete(`${URL}${SERVICES}/${id}`);
// export const addService = (service:{text:string; price:number}) => axios.post(`${URL}${SERVICES}`,{service});
