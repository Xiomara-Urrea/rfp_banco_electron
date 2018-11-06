import React from 'react';

import AddCredit from '../../../../../Common/Button';

const ActionBarView = (props) => (
	<div>
		<div className="input-field col s6">
			<AddCredit
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Pay"
				icon="local_atm"
				classNameIcon="right"
				onClick={(e) => props.updateCredit}
			/>
		</div>
	</div>
);

export default ActionBarView;
