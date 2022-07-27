import { useState } from 'react';
import { serviceToEditType } from '../Pricelist';

interface propsType {
	handleCancel: () => void;
	handleSubmit: (e: React.SyntheticEvent) => void;
	serviceToEdit: serviceToEditType;
}

const ServiceEditForm: React.FC<propsType> = ({
	handleCancel,
	handleSubmit,
	serviceToEdit,
}) => {
	const [newText, setNewText] = useState<string>(serviceToEdit.text);
	const [newPrice, setNewPrice] = useState<number>(serviceToEdit.price);

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.select();
	};

	return (
		<form className='service-edit-form' onSubmit={(e) => handleSubmit(e)}>
			<input
				autoFocus
				onFocus={handleFocus}
				type='text'
				name='text'
				value={newText}
				onChange={(e) => setNewText(e.target.value)}
				placeholder='Nazwa usługi'
				className='service-edit-form__title'
			/>
			<input
				type='number'
				name='number'
				value={newPrice}
				onChange={(e) => setNewPrice(parseFloat(e.target.value))}
				placeholder='Cena usługi'
				className='service-edit-form__price'
			/>{' '}
			<span className='service-edit-form__span'>zł</span>
			<button type='submit' className='service-edit-form__submit'>
				Zatwierdź
			</button>
			<button
				type='button'
				onClick={handleCancel}
				className='service-edit-form__cancel'>
				Anuluj
			</button>
		</form>
	);
};

export default ServiceEditForm;
