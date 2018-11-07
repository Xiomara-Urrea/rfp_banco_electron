import React from 'react';

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';

const Form = (props) => (
	<div className="row">
		<Fields {...props} />
		<ActionBar {...props} />
	</div>
);

export default Form;
