import './Galery.scss';
import { useEffect, useState } from 'react';
import Popup from '../../Popup/Popup';
import UploadImageForm from './UploadImageForm/UploadImageForm';

import { StateType } from '../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import { FormName } from '../../../state/action-types';
import Spinner from '../../Spinner/Spinner';

export type serviceToEditType = {
	_id: number;
	text: string;
};

const Galery = () => {
	const {
		galery,
		formsVisibility: { uploadImageForm },
		processing,
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { DeleteImage, GetImages, ShowForm, Processing, ProcessingDone } =
		bindActionCreators(actionCreators, dispatch);

	const [currentImageName, setCurrentImageName] = useState('');
	const [popupActive, setPopupActive] = useState(false);

	useEffect(() => {
		if (galery.length) return;
		GetImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOnLoad = () => {
		if (!processing) return;
		ProcessingDone();
	};

	const handlePopupActive = (name: string) => {
		setCurrentImageName(name);
		setPopupActive(true);
	};

	const handleShowUploadImageForm = () => {
		ShowForm({ formName: FormName.UPLOAD_IMAGE_FORM });
	};

	const handleDeleteImage = async () => {
		Processing();
		setPopupActive(false);
		await DeleteImage(currentImageName);
		ProcessingDone();
	};

	const handleCancelDeleteImage = () => {
		setPopupActive(false);
		setCurrentImageName('');
	};

	const images = galery.map((image) => (
		<div className='galery-item' key={image.name}>
			{processing ? null : (
				<div className='galery-item__delete-wrapper'>
					<img
						src='icons/delete.svg'
						alt='Delete icon'
						className='galery-item__delete-icon'
						onClick={() => handlePopupActive(image.name)}
					/>
				</div>
			)}
			<img
				className='galery-item__image'
				src={image.url}
				alt={image.name}
				onLoad={handleOnLoad}></img>
		</div>
	));

	const popup = popupActive ? (
		<Popup
			text={`Czy na pewno chcesz usunąć zdjęcie "${currentImageName}"?`}
			handleYes={() => {
				setPopupActive(true);
				handleDeleteImage();
			}}
			handleNo={handleCancelDeleteImage}
		/>
	) : null;

	const addImageButton = processing ? null : (
		<div className='galery__button-wrapper'>
			<button
				className='galery__add-button'
				onClick={handleShowUploadImageForm}>
				Dodaj zdjęcie
			</button>
		</div>
	);

	return (
		<section className='galery'>
			{uploadImageForm && <UploadImageForm />}
			{popup}
			{processing && <Spinner />}
			{addImageButton}
			{images}
		</section>
	);
};

export default Galery;
