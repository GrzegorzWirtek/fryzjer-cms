import './Galery.scss';
import { useEffect } from 'react';
// import Popup from '../../Popup/Popup';

import { StateType } from '../../../state/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import Spinner from '../../Spinner/Spinner';

export type serviceToEditType = {
	_id: number;
	text: string;
};

const Galery = () => {
	const {
		galery,
		// formsVisibility: { serviceEditForm, serviceAddForm },
	} = useSelector((state: StateType) => state);
	const dispatch = useDispatch();
	const { GetImages } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		GetImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const images = galery.map((image) => (
		<div key={image.name}>
			<img src={image.url} alt={image.name} />
		</div>
	));

	return (
		<section className='services'>
			{galery.length ? images : <Spinner />}
		</section>
	);
};

export default Galery;
