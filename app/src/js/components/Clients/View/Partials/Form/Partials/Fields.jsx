import React from 'react';

import CreditValue from '../../../../../Common/Input';

const Fields = (props) => (
	<div className="container">
		<CreditValue
			id="credit_value"
			name="creditValue"
			// value={props.client.firstName ? props.client.firstName: "" }
			text="Credit Value"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
		// onChange={(e) => props.loadClient(e)}
		/>
		<CreditValue
			id="credit_value"
			name="creditValue"
			// value={props.client.firstName ? props.client.firstName: "" }
			text="Credit Value"
			icon="account_circle"
			classNameIcon="prefix"
		// onChange={(e) => props.loadClient(e)}
		/>
	</div>
);

export default Fields;
