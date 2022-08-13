import './Pricelist.scss';
import * as api from '../../../api/index';
import { useEffect, useState } from 'react';
import ServiceEditForm from './ServiceEditForm/ServiceEditForm';
import Popup from '../../Popup/Popup';
import ServiceAddFrom, {
	newServiceType,
} from './ServiceAddFrom/ServiceAddFrom';

import { StateType } from '../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';

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
	const {
		services,
		formsVisibility: { serviceEditForm },
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { GetServices, ShowForm } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	useEffect(() => {
		GetServices();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [state, setState] = useState<State['servicesType']>([]);
	const [serviceToEdit, setServiceToEdit] = useState<serviceToEditType>({
		_id: 0,
		text: '',
		price: 0,
	});
	const [addFormVisible, setAddFormVisible] = useState(false);
	const [popupActive, setPopupActive] = useState(false);

	const handleCancel = () => {
		setAddFormVisible(false);
	};

	const handleDelete = (_id: number, text: string, price: number) => {
		setServiceToEdit({
			_id: _id,
			text: text,
			price: price,
		});
		setPopupActive(true);
	};

	const handlePopuYes = () => {
		setPopupActive(false);
		deleteService(serviceToEdit._id);
	};

	const deleteService = async (_id: number) => {
		const { data } = await api.deleteService(_id);
		setState(data);
	};

	const handlePopuNo = () => {
		setPopupActive(false);
	};

	const handleAddNewService = (newService: newServiceType) => {
		const { text, price, index } = newService;
		const newServices = state.map((item) => {
			return { text: item.text, price: item.price };
		});

		newServices.splice(index - 1, 0, {
			text,
			price,
		});

		//nowa kolejność usług do wyslania na backend: 'newServices'
		addService(newServices);
		setAddFormVisible(false);
	};

	const addService = async (services: { text: string; price: number }[]) => {
		const { data } = await api.addService(services);
		setState(data);
	};

	const editForm = serviceEditForm ? <ServiceEditForm /> : null;

	const addForm = addFormVisible ? (
		<ServiceAddFrom
			handleCancel={handleCancel}
			handleAddNewService={handleAddNewService}
		/>
	) : null;

	const prices = services.map((item, index) => (
		<div key={item._id} className='service'>
			<p className='service__index'>{index + 1}.</p>
			<p className='service__title'>{item.text}</p>
			<p className='service__price'>{item.price}</p>
			<img
				src='icons/edit.svg'
				alt='Edit icon'
				className='service__edit-icon'
				onClick={() =>
					ShowForm({ formName: 'serviceEditForm', currentId: item._id })
				}
			/>
			<img
				src='icons/delete.svg'
				alt='Delete icon'
				className='service__delete-icon'
				onClick={() => handleDelete(item._id, item.text, item.price)}
			/>
		</div>
	));

	const popup = popupActive ? (
		<Popup
			text={`Czy na pewno chcesz usunąć usługę "${serviceToEdit.text}"?`}
			handleYes={handlePopuYes}
			handleNo={handlePopuNo}
		/>
	) : null;

	return (
		<>
			{popup}
			<button
				className='service__add-new'
				onClick={() => setAddFormVisible(true)}>
				Dodaj nową usługę
			</button>
			<section className='pracelist'>
				{prices} {editForm} {addForm}
			</section>
		</>
	);
};

export default Pricelist;
