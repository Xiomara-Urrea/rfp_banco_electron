import React from 'react';

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div className="row">
		<Fields loadAccount={props.loadAccount} />
		<ActionBar createAccount={props.createAccount} />
	</div>
);

export default Form;
