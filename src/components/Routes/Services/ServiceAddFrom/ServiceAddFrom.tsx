import './ServiceAddFrom.scss';
import React from 'react';
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
		<div className='service-add-form-wrapper'>
			<form className='service-add-form' onSubmit={handleSubmit}>
				<h2 className='service-add-form__title'>Dodawanie usługi</h2>
				<input
					type='text'
					name='text'
					placeholder='Nazwa usługi'
					required
					className='service-add-form__service'
				/>
				<input
					type='number'
					name='price'
					placeholder='Cena usługi'
					required
					className='service-add-form__price'
				/>{' '}
				<span className='service-add-form__span'>zł</span>
				<input
					type='number'
					name='index'
					placeholder='Kolejność na liście'
					required
					className='service-add-form__order'
				/>
				<button
					type='submit'
					className='service-add-form__button service-add-form__button--submit'>
					Zatwierdź
				</button>
				<button
					type='button'
					className='service-add-form__button service-add-form__button--cancel'
					onClick={() => HideForm()}>
					Anuluj
				</button>
			</form>
		</div>
	);
};

export default ServiceAddFrom;
