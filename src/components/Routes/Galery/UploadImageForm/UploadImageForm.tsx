import './UploadImageForm.scss';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../../state';
import React, { useState } from 'react';

const UploadImageForm = () => {
	const dispatch = useDispatch();
	const { UploadImage, HideForm, Processing } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	const [imageToUpload, setImageToUpload] = useState<File | null>(null);
	const [labelTextContent, setLabelTextContent] = useState('Wybierz zdjęcie');
	const [imageIsSelected, setImageIsSelected] = useState(false);

	const handleUploadImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target as HTMLInputElement;

		if (!input.files?.length) {
			return;
		}

		const file = input.files[0];

		setLabelTextContent(input.files[0].name);
		setImageIsSelected(true);

		if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
			return;
		}
		setImageToUpload(file);
	};

	const handleCancelUploadImage = () => {
		HideForm();
	};

	const handleSubmitUploadImage = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!imageToUpload) return;
		HideForm();
		Processing();
		UploadImage(imageToUpload);
	};

	return (
		<div
			className='upload-image-form-wrapper'
			onSubmit={handleSubmitUploadImage}>
			<form className='upload-image-form'>
				<label
					htmlFor='upload-image-form__input'
					className='upload-image-form__label'>
					<input
						type='file'
						accept='image/png, image/jpeg'
						className='upload-image-form__input'
						id='upload-image-form__input'
						onChange={handleUploadImageChange}
					/>
					{labelTextContent}
				</label>
				<button
					className={`upload-image-form__button upload-image-form__button--submit ${
						imageIsSelected ? '' : 'upload-image-form__button--disabled'
					}`}
					type='submit'>
					Zatwierdź
				</button>
				<button
					className='upload-image-form__button upload-image-form__button--cancel'
					type='button'
					onClick={handleCancelUploadImage}>
					Anuluj
				</button>
			</form>
		</div>
	);
};

export default UploadImageForm;
