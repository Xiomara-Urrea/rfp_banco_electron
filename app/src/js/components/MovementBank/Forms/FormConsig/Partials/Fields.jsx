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
			onChange={props.loadConsig}
		/>

		<ValueAccount
			id="valueAccountConsig"
			name="valueAccountConsig"
			text="Valor De La Cuenta"
			type="number"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={props.loadConsig}
		/>

	</div>
);

export default Fields;
