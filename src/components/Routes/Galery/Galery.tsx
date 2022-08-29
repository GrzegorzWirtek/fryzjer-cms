import './Galery.scss';
import { useEffect, useState } from 'react';
import Popup from '../../Popup/Popup';

import { StateType } from '../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import Spinner from '../../Spinner/Spinner';
// import FileInput from '../../FileInput/FileInput';

export type serviceToEditType = {
	_id: number;
	text: string;
};

const Galery = () => {
	const {
		galery,
		// formsVisibility: { deleting },
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { GetImages, DeleteImage } = bindActionCreators(
		actionCreators,
		dispatch,
	);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [currentImageName, setCurrentImageName] = useState('');
	const [popupActive, setPopupActive] = useState(false);

	useEffect(() => {
		if (galery.length) return;
		GetImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handlePopupActive = (name: string) => {
		setCurrentImageName(name);
		setPopupActive(true);
	};

	const handleDeleteImage = () => {
		DeleteImage(currentImageName);
		setPopupActive(false);
	};

	const handleCancelDeleteImage = () => {
		setPopupActive(false);
		setCurrentImageName('');
	};

	const images = galery.map((image) => (
		<div className='galery-item' key={image.name}>
			<div className='galery-item__delete-wrapper'>
				<img
					src='icons/delete.svg'
					alt='Delete icon'
					className='galery-item__delete-icon'
					onClick={() => handlePopupActive(image.name)}
				/>
			</div>
			<img
				className='galery-item__image'
				src={image.url}
				alt={image.name}
				onLoad={() => setImageLoaded(true)}></img>
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

	return (
		<section className='galery'>
			{/* <FileInput /> */}
			{popup}
			{imageLoaded ? (
				<div className='galery__button-wrapper'>
					<button className='galery__add-button'>Dodaj zdjęcie</button>
				</div>
			) : (
				<Spinner />
			)}
			{images}
		</section>
	);
};

export default Galery;
