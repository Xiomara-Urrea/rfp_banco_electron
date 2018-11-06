import React from 'react';

import Fields from './Partials/Fields';
import ActionBarForm from './Partials/ActionBarForm';

const Form = (props) => (
	<div className="row">
		<Fields loadClient={props} />
		<ActionBarForm createClient={props} />
	</div>
);

export default Form;
