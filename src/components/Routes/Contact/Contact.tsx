import { useEffect, useState } from 'react';
import * as api from '../../../api';
import './Contact.scss';
import ContactForm from './ContactForm/ContactForm';

const initialContactData = {
	street: '',
	buildingNr: 0,
	apartmentNr: 0,
	zipCode: 0,
	city: '',
	info: '',
	tel: 0,
};

const Contact = () => {
	const [contactData, setContactData] =
		useState<api.contactDataType>(initialContactData);
	const [contactFormVisible, setContactFormVisible] = useState(false);

	useEffect(() => {
		const getContact = async () => {
			const { data } = await api.getContact();
			setContactData(data);
		};
		getContact();
	}, []);

	const { street, buildingNr, apartmentNr, zipCode, city, info, tel } =
		contactData;

	const telString = `${String(tel).slice(0, 3)}-${String(tel).slice(
		3,
		6,
	)}-${String(tel).slice(6, 9)}`;

	const zipCodeString = `${String(zipCode)
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
					{zipCodeString} {city}
				</p>
				<p className='contact__info'>{info}</p>
				<a href={`tel:${tel}`} className='contact__phone'>
					<img
						src='icons/phone.svg'
						alt='Phone icon'
						className='contact__phone-img'
					/>
					<p className='contact__phone-nr'>{telString}</p>
				</a>
				<button
					className='contact__edit-btn'
					onClick={() => setContactFormVisible(true)}>
					Edytuj
				</button>
			</section>
			{contactFormVisible && <ContactForm />}
		</>
	);
};

export default Contact;
