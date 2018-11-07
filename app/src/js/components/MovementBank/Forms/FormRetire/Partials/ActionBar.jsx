import React from 'react';

import Save from '../../../../Common/Button';
import Clean from '../../../../Common/Button';

const ActionBar = (props) => (
	<div>
		<div className="input-field col s6 align-center">
			<Save
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Retirar"
				icon="send"
				classNameIcon="right"
				onClick={props.updateRetire}
			/>
		</div>
		<div className="input-field col s6 align-center">
			<Clean
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Limpiar"
				icon="delete_sweep"
				classNameIcon="right"
			/>
		</div>
	</div>
);

export default ActionBar;
