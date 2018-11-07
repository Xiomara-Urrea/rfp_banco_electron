import React from 'react';

import NumeroCuenta from '../../../../Common/Input';
import ValueAccount from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<NumeroCuenta
			id="numberAccount"
			name="numberAccount"
			text="Numero De Cuenta"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<ValueAccount
			id="valueAccount"
			name="valueAccount"
			text="Valor De La Cuenta"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

	</div>
);

export default Fields;
