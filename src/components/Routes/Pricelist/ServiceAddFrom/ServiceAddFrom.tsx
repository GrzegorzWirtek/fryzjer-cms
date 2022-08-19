import React from 'react';
import './ServiceAddFrom.scss';
import { StateType } from '../../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';

export type newServiceType = {
	text: string;
	price: number;
	index: number;
};

const ServiceAddFrom = () => {
	const { services } = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { AddService, HideForm } = bindActionCreators(actionCreators, dispatch);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			text: { value: string };
			price: { value: number };
			index: { value: number };
		};
		const text = target.text.value;
		const price = target.price.value;
		const index = target.index.value;

		const newServices = createNewServicesOrder({ text, price, index });
		AddService(newServices);
		HideForm();
	};

	const createNewServicesOrder = (newService: newServiceType) => {
		const { text, price, index } = newService;

		const newServices = services.map((item) => {
			return { text: item.text, price: item.price };
		});

		newServices.splice(index - 1, 0, {
			text,
			price,
		});
		return newServices;
	};

	return (
		<form className='service-add-form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='text'
				placeholder='Nazwa usługi'
				required
				className='service-add-form__title'
			/>
			<input
				type='number'
				name='price'
				placeholder='Cena usługi'
				required
				className='service-add-form__title'
			/>{' '}
			<span className='service-add-form__span'>zł</span>
			<input
				type='number'
				name='index'
				placeholder='Kolejność na liście'
				required
				className='service-add-form__title'
			/>
			<button type='submit' className='service-add-form__submit'>
				Zatwierdź
			</button>
			<button
				type='button'
				className='service-add-form__cancel'
				onClick={() => HideForm()}>
				Anuluj
			</button>
		</form>
	);
};

export default ServiceAddFrom;
