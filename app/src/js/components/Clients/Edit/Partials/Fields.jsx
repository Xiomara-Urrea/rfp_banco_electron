import React from 'react';

import FirtsName from '../../../Common/Input';
import LastsName from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<FirtsName
			id="firts_name"
            name="firstName"
            value={props.client.firstName ? props.client.firstName: "" }
			text="Firts Name"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
			onChange={(e) => props.loadClient(e)}
		/>
	
		<LastsName
			id="last_name"
            name="lastName"
            value={props.client.lastName ? props.client.lastName: ""}
			text="Last Name"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={(e) => props.loadClient(e)}
		/>
	</div>
);

export default Fields;
