import React from 'react';
import PropTypes from 'prop-types';

import Icons from '../Icons';

const Input = ({ id, name, value, text, type, autoFocus, className, classNameInput, classNameLabel, placeholder, onChange, icon, classNameIcon }) => {
	return (
		<div className={`input-field ${className}`}>
			{icon && (<Icons
				className={classNameIcon}
				icon={icon}
			/>)}
			<input
				id={id}
				name={name}
				value={value}
				type={type}
				autoFocus={autoFocus}
				className={classNameInput}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<label htmlFor={id} className={classNameLabel}>{text}</label>
		</div>
	);
};

Input.defaultProps = {
	className: 'col s12',
	classNameInput: "validate",
	classNameLabel: 'active',
	type: 'text',
	autoFocus: false
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	icon: PropTypes.string,
	classNameIcon: (props, propName, componentName) => {
		if (props.icon && (!props.classNameIcon)) {
			return new Error(`Invalid prop '${propName}' supplied to '${componentName}' .Validation failed`);
		}
	},
	placeholder: PropTypes.string,
};

export default Input;
