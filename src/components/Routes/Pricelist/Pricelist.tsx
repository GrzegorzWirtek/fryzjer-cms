import './Pricelist.scss';
import * as api from '../../../api/index';
import { useEffect, useState } from 'react';
import ServiceEditForm from './ServiceEditForm/ServiceEditForm';

interface State {
	servicesType: {
		_id: number;
		text: string;
		price: number;
	}[];
}

export type serviceToEditType = {
	_id: number;
	text: string;
	price: number;
};

const Pricelist = () => {
	const [state, setState] = useState<State['servicesType']>([]);
	const [editFormVisible, setEditFormVisible] = useState(false);
	const [serviceToEdit, setServiceToEdit] = useState<serviceToEditType>({
		_id: 0,
		text: '',
		price: 0,
	});

	useEffect(() => {
		const loadServices = async () => {
			const { data } = await api.getServices();
			setState(data);
		};
		loadServices();
	}, []);

	const handleCancel = () => {
		setEditFormVisible(false);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			text: { value: string };
			number: { value: number };
		};
		const newService = target.text.value;
		const newPrice = target.number.value;
		setEditFormVisible(false);

		//nowe dane do wysłania na backend
		console.log(newService, newPrice, serviceToEdit._id);
	};

	const editForm = editFormVisible ? (
		<ServiceEditForm
			handleCancel={handleCancel}
			handleSubmit={handleSubmit}
			serviceToEdit={serviceToEdit}
		/>
	) : null;

	const prices = state?.map((item) => (
		<div key={item._id} className='service'>
			<p className='service__title'>{item.text}</p>
			<p className='service__price'>{item.price}</p>
			<img
				src='icons/edit.svg'
				alt='Edit icon'
				className='service__edit-icon'
				onClick={() => {
					setServiceToEdit({
						_id: item._id,
						text: item.text,
						price: item.price,
					});
					setEditFormVisible(true);
				}}
			/>
			<img
				src='icons/delete.svg'
				alt='Delete icon'
				className='service__delete-icon'
			/>
		</div>
	));
	return (
		<section className='pracelist'>
			{prices} {editForm}
		</section>
	);
};

export default Pricelist;
