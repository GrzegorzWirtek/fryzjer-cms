import {
	ref,
	uploadBytes,
	listAll,
	getDownloadURL,
	deleteObject,
	getMetadata,
} from 'firebase/storage';
import { useEffect, useState } from 'react';
import storage from '../../firebase/firebase';

const FileInput = () => {
	const [imageUpload, setImageUpload] = useState<File | null>(null);
	const [imageList, setImageList] = useState(
		[] as { url: string; name: string }[],
	);

	const imageListRef = ref(storage, 'images/');

	useEffect(() => {
		const getImages = async () => {
			const res = await listAll(imageListRef);
			res.items.forEach(async (item) => {
				const url = await getDownloadURL(item);
				const name = (await getMetadata(item)).fullPath;
				setImageList((prev) => [...prev, { url, name }]);
			});
		};
		getImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target as HTMLInputElement;

		if (!input.files?.length) {
			return;
		}

		const file = input.files[0];

		if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
			return;
		}
		setImageUpload(file);
	};

	const handleUpload = async () => {
		if (!imageUpload) return;
		const imageName = `images/${Date.now() + imageUpload.name}`;
		const imageRef = ref(storage, imageName);
		const data = await uploadBytes(imageRef, imageUpload);
		const url = await getDownloadURL(data.ref);
		setImageList((prev) => [...prev, { url, name: imageName }]);
	};

	const handleDeletePhoto = async (imageName: string) => {
		const imageRef = ref(storage, imageName);

		try {
			await deleteObject(imageRef);
			const uploadedImagteList = imageList.filter(
				(image) => image.name !== imageName,
			);
			setImageList(uploadedImagteList);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='file-input'>
			<input
				type='file'
				className='file-input__input'
				onChange={(e) => handleImageChange(e)}
			/>
			<button className='file-input__button' onClick={handleUpload}>
				Dodaj Zdjęcie
			</button>
			{imageList.map((image) => (
				<div key={image.name}>
					<button onClick={() => handleDeletePhoto(image.name)}>usuń</button>
					<img src={image.url} alt='' />
				</div>
			))}
		</div>
	);
};

export default FileInput;
