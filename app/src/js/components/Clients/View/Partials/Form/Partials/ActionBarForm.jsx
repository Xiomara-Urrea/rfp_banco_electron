import React from 'react';

import Clean from '../../../../../Common/Button';

const ActionBar = (props) => (
	<div className="container">
		<div className="input-field col s6 center-aling">
			<Clean
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Clear"
				icon="delete_sweep"
				classNameIcon="right"
			/>
		</div>

		<div className="input-field col s6 center-aling">
			<Clean
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Clear"
				icon="delete_sweep"
				classNameIcon="right"
			/>
		</div>
	</div>
);

export default ActionBar;
