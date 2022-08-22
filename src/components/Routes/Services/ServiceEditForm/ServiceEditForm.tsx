import './ServiceEditForm.scss';
import { StateType } from '../../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';
import { useState } from 'react';

const ServiceEditForm = () => {
	const {
		services,
		formsVisibility: { currentId },
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { HideForm, UpdateService } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	const currentService = services.filter((item) => item._id === currentId)[0];
	const { text, price } = currentService;

	const [newText, setNewText] = useState<string>(text);
	const [newPrice, setNewPrice] = useState<number>(price);

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.select();
	};

	const handleCancel = () => {
		HideForm();
	};

	const handlePriceChange = (e: string) => {
		if (e.length) {
			setNewPrice(parseFloat(e));
		} else setNewPrice(0);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			text: { value: string };
			number: { value: number };
		};
		const newService = target.text.value;
		const newPrice = target.number.value;

		UpdateService({
			_id: currentId,
			text: newService,
			price: newPrice,
		});
		HideForm();
	};

	return (
		<div className='service-edit-form-wrapper'>
			<form className='service-edit-form' onSubmit={handleSubmit}>
				<h2 className='service-edit-form__title'>Edytowanie usługi</h2>
				<input
					autoFocus
					onFocus={handleFocus}
					type='text'
					name='text'
					value={newText}
					onChange={(e) => setNewText(e.target.value)}
					placeholder='Nazwa usługi'
					required
					className='service-edit-form__service'
				/>
				<input
					type='number'
					name='number'
					value={newPrice}
					onChange={(e) => handlePriceChange(e.target.value)}
					placeholder='Cena usługi'
					required
					className='service-edit-form__price'
				/>{' '}
				<span className='service-edit-form__span'>zł</span>
				<button type='submit' className='service-edit-form__button --submit'>
					Zatwierdź
				</button>
				<button
					type='button'
					onClick={handleCancel}
					className='service-edit-form__button service-edit-form__button--cancel'>
					Anuluj
				</button>
			</form>
		</div>
	);
};

export default ServiceEditForm;
