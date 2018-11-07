import React from 'react';

import NumeroCuenta from '../../../../Common/Input';
import ValueAccount from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<NumeroCuenta
			id="numberAccountRetire"
			name="numberAccountRetire"
			text="Numero de Cuenta"
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadRetire}
		/>

		<ValueAccount
			id="valueAccountRetire"
			name="valueAccountRetire"
			text="Valor De Cuenta"
			type="number"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={props.loadRetire}
		/>

	</div>
);

export default Fields;
