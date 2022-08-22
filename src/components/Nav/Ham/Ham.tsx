import './Ham.scss';

interface propsType {
	hamActive: boolean;
	toggleHam: () => void;
}

const Ham: React.FC<propsType> = ({ hamActive, toggleHam }) => {
	return (
		<div
			className={`ham ${hamActive ? 'ham--active' : ''}`}
			onClick={toggleHam}>
			<div className='ham__item'></div>
			<div className='ham__item'></div>
			<div className='ham__item'></div>
		</div>
	);
};

export default Ham;
