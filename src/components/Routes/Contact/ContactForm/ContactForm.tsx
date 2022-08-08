import './ContactForm.scss';

const ContactForm = () => {
	return (
		<form className='contact-form'>
			<input
				type='text'
				name='street'
				placeholder='Ulica'
				required
				className='contact-form__street'
			/>
			<input
				type='number'
				name='buildingNr'
				placeholder='Numer budynku'
				required
				className='contact-form__building-nr'
			/>
			<input
				type='number'
				name='apartmentNr'
				placeholder='Numer Lokalu'
				className='contact-form__apartment-nr'
			/>
			<input
				type='text'
				name='zipCode'
				placeholder='Kod pocztowy'
				required
				className='contact-form__zip-code'
			/>
			<input
				type='text'
				name='city'
				placeholder='Miasto'
				required
				className='contact-form__city'
			/>
			<input
				type='text'
				name='tel'
				placeholder='Telefon'
				required
				className='contact-form__tel'
			/>
			<button type='submit' className='contact-form__submit-btn'>
				Zatwierdź
			</button>
			<button type='button' className='contact-form__submit-btn'>
				Anuluj
			</button>
		</form>
	);
};

export default ContactForm;
