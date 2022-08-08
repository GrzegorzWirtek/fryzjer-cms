type propsType = {
	info: string;
};

const FormError: React.FC<propsType> = ({ info }) => {
	return (
		<div className='form-error'>
			<p className='form-error__title'>{info}</p>
		</div>
	);
};

export default FormError;
