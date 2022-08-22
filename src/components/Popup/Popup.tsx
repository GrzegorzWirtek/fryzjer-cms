import './Popup.scss';

interface propsType {
	text: string;
	handleYes: () => void;
	handleNo: () => void;
}

const Popup: React.FC<propsType> = ({ text, handleYes, handleNo }) => {
	return (
		<section className='popup'>
			<div className='popup__wrapper'>
				<p className='popup__text'>{text}</p>
				<button
					className='popup__button popup__button--yes'
					onClick={handleYes}>
					Tak
				</button>
				<button className='popup__button popup__button--no' onClick={handleNo}>
					Nie
				</button>
			</div>
		</section>
	);
};

export default Popup;
