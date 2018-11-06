import React from 'react';

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div className="row">
		<Fields handleChange={props.handleChange} />
		<ActionBar handleSubmit={props.handleSubmit} />
	</div>
);

export default Form;
