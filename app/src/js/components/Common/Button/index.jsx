import React from 'react';
import PropTypes from 'prop-types';

import Icons from '../Icons';

const Button = ({ className, texto, onClick, icon, classNameIcon }) => {
	return (
		<button
			className={className}
			onClick={onClick}
		>
			{icon && (<Icons
				className={classNameIcon}
				icon={icon}
			/>)}
			{texto}
		</button>
	);
};

Button.defaultProps = {
	className: '',
};

Button.propTypes = {
	value: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.string,
	classNameIcon: (props, propName, componentName) => {
		if(props.icon && (!props.classNameIcon)){
			return new Error(`Invalid prop '${propName}' supplied to '${componentName}' .Validation failed`);
		}
	},
};

export default Button;
