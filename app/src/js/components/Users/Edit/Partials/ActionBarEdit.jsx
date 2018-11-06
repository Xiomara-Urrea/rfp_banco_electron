import React from 'react';

import Update from '../../../Common/Button';

const ActionBarEdit = (props) => (
	<div>
		<div className="input-field col s6">
			<Update
				className="waves-effect waves-light btn"
				texto="Update"
				icon="save"
				classNameIcon="right"
				onClick={props.updateClient}
			/>
		</div>
	</div>
);

export default ActionBarEdit;
