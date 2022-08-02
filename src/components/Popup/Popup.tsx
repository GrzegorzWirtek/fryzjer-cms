import './Popup.scss';

interface propsType {
	text: string;
	handleYes: () => void;
	handleNo: () => void;
}

const Popup: React.FC<propsType> = ({ text, handleYes, handleNo }) => {
	return (
		<div className='popup'>
			<p className='popup__text'>{text}</p>
			<button className='popup__button popup__button--yes' onClick={handleYes}>
				Tak
			</button>
			<button className='popup__button popup__button--no' onClick={handleNo}>
				Nie
			</button>
		</div>
	);
};

export default Popup;
