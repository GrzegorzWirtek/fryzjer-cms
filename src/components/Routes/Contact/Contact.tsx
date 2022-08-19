import { useEffect } from 'react';
import './Contact.scss';
import ContactForm from './ContactForm/ContactForm';
import { StateType } from '../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';

const Contact = () => {
	const {
		contact,
		formsVisibility: { contactForm },
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { GetContact, ShowForm } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		GetContact();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { street, buildingNr, apartmentNr, zipCode, city, info, tel } = contact;

	const telToString = `${String(tel).slice(0, 3)}-${String(tel).slice(
		3,
		6,
	)}-${String(tel).slice(6, 9)}`;

	const zipCodeToString = `${String(zipCode)
		.padStart(5, '0')
		.slice(0, 2)}-${String(zipCode).padStart(5, '0').slice(2, 5)}`;

	return (
		<>
			<section className='contact'>
				<p className='contact__street'>
					ul. {street} {buildingNr} lok.
					{apartmentNr}
				</p>
				<p className='contact__city'>
					{zipCodeToString} {city}
				</p>
				<p className='contact__info'>{info}</p>
				<a href={`tel:${tel}`} className='contact__phone'>
					<img
						src='icons/phone.svg'
						alt='Phone icon'
						className='contact__phone-img'
					/>
					<p className='contact__phone-nr'>{telToString}</p>
				</a>
				<button
					className='contact__edit-btn'
					onClick={() => ShowForm({ formName: 'contactForm' })}>
					Edytuj
				</button>
			</section>
			{contactForm && <ContactForm />}
		</>
	);
};

export default Contact;
