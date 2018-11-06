import React from 'react';

import Fields from './Partials/Fields';
import ActionBarEdit from './Partials/ActionBarEdit';

const Edit = (props) => (
	<div >
		<Fields loadClient={props.loadClient} client={props.client} />
		<ActionBarEdit  updateClient={props.updateClient}/>
	</div>
);

export default Edit;