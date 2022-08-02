import React from 'react';
import './ServiceAddFrom.scss';

export type newServiceType = {
	text: string;
	price: number;
	index: number;
};

interface propsType {
	handleCancel: () => void;
	handleAddNewService: (newService: newServiceType) => void;
}

const ServiceAddFrom: React.FC<propsType> = ({
	handleCancel,
	handleAddNewService,
}) => {
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

		const newService = { text, price, index };
		handleAddNewService(newService);
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
				onClick={handleCancel}
				className='service-add-form__cancel'>
				Anuluj
			</button>
		</form>
	);
};

export default ServiceAddFrom;
