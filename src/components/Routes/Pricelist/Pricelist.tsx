import './Pricelist.scss';
import { useEffect, useState } from 'react';
import ServiceEditForm from './ServiceEditForm/ServiceEditForm';
import Popup from '../../Popup/Popup';
import ServiceAddFrom from './ServiceAddFrom/ServiceAddFrom';

import { StateType } from '../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';

export type serviceToEditType = {
	_id: number;
	text: string;
};

const Pricelist = () => {
	const {
		services,
		formsVisibility: { serviceEditForm, serviceAddForm },
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { GetServices, DeleteService, ShowForm } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	useEffect(() => {
		GetServices();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [serviceToEdit, setServiceToEdit] = useState<serviceToEditType>({
		_id: 0,
		text: '',
	});
	const [popupActive, setPopupActive] = useState(false);

	const handleDelete = (_id: number, text: string) => {
		setServiceToEdit({
			_id: _id,
			text: text,
		});
		setPopupActive(true);
	};

	const handlePopuYes = () => {
		setPopupActive(false);
		DeleteService(serviceToEdit._id);
	};

	const handlePopuNo = () => {
		setPopupActive(false);
	};

	const editForm = serviceEditForm ? <ServiceEditForm /> : null;
	const addForm = serviceAddForm ? <ServiceAddFrom /> : null;
	const popup = popupActive ? (
		<Popup
			text={`Czy na pewno chcesz usunąć usługę "${serviceToEdit.text}"?`}
			handleYes={handlePopuYes}
			handleNo={handlePopuNo}
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
				onClick={() => handleDelete(item._id, item.text)}
			/>
		</div>
	));

	return (
		<>
			{popup}
			<button
				className='service__add-new'
				onClick={() => ShowForm({ formName: 'serviceAddForm' })}>
				Dodaj nową usługę
			</button>
			<section className='pracelist'>
				{prices} {editForm} {addForm}
			</section>
		</>
	);
};

export default Pricelist;
