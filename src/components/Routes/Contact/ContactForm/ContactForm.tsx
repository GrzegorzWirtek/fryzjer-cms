import { useState } from 'react';
import './ContactForm.scss';
import FormError from '../FormError/FormError';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';

const ContactForm = () => {
	const [formErrorInfo, setFormErrorInfo] = useState('');

	const dispatch = useDispatch();
	const { HideForm, UpdateContact } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	const getInputsValue = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			street: { value: string };
			buildingNr: { value: number };
			apartmentNr: { value: number };
			zipCode: { value: string };
			city: { value: string };
			info: { value: string };
			tel: { value: string };
		};
		const street = target.street.value;
		const buildingNr = target.buildingNr.value;
		const apartmentNr = target.apartmentNr.value;
		const zipCode = target.zipCode.value.replace(/-/g, '');
		const city = target.city.value;
		const info = target.info.value;
		const tel = target.tel.value.replace(/-/g, '');

		checkZipCodeAndTel(
			street,
			buildingNr,
			apartmentNr,
			zipCode,
			city,
			info,
			tel,
		);
	};

	const checkZipCodeAndTel = (
		street: string,
		buildingNr: number,
		apartmentNr: number,
		zipCode: string,
		city: string,
		info: string,
		tel: string,
	) => {
		if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) {
			setFormErrorInfo('Błędny kod pocztowy');
		} else if (tel.length !== 9 || !/^\d+$/.test(tel)) {
			setFormErrorInfo('Błędny numer telefonu');
		} else {
			UpdateContact({
				street,
				buildingNr,
				apartmentNr,
				zipCode,
				city,
				info,
				tel,
			});
			setFormErrorInfo('');
			HideForm();
		}
	};

	return (
		<div className='contact-form-wrapper'>
			<form className='contact-form' onSubmit={getInputsValue}>
				<h2 className='contact-form__title'>Edytowanie adresu</h2>
				{formErrorInfo.length ? <FormError info={formErrorInfo} /> : null}
				<input
					type='text'
					name='street'
					placeholder='Ulica'
					required
					className='contact-form__input contact-form__input--street'
				/>
				<input
					type='number'
					name='buildingNr'
					placeholder='Numer budynku'
					required
					className='contact-form__input contact-form__input--building-nr'
				/>
				<input
					type='number'
					name='apartmentNr'
					placeholder='Numer Lokalu'
					className='contact-form__input contact-form__input--apartment-nr'
				/>
				<input
					type='text'
					name='zipCode'
					placeholder='Kod pocztowy'
					required
					className='contact-form__input contact-form__input--zip-code'
				/>
				<input
					type='text'
					name='city'
					placeholder='Miasto'
					required
					className='contact-form__input contact-form__input--city'
				/>
				<input
					type='text'
					name='info'
					placeholder='Dodatkowe informacje'
					className='contact-form__input contact-form__input--info'
				/>
				<input
					type='text'
					name='tel'
					placeholder='Telefon'
					required
					className='contact-form__input contact-form__input--tel'
				/>
				<button
					type='submit'
					className='contact-form__button contact-form__button--submit'>
					Zatwierdź
				</button>
				<button
					type='button'
					className='contact-form__button contact-form__button--cancel'
					onClick={HideForm}>
					Anuluj
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
