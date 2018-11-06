import React from 'react';
import PropTypes from 'prop-types';

const LabelUpdate = ({ visible }) => visible && (
	<div className=" ">
		<span className="etiqueta">Actualizar</span>
	</div>
);

LabelUpdate.propTypes = {
	visible: PropTypes.bool,
};

export default LabelUpdate;
