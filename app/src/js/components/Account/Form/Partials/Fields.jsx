import React from 'react';

import NumberAccount from '../../../Common/Input';
import StateAccount from '../../../Common/Input';
import ValueAccount from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<NumberAccount
			id="numberAccount"
			name="numberAccount"
			text="Numero De La Cuenta"
			autoFocus={true}
			icon="credit_card"
			classNameIcon="prefix"
			onChange={props.loadAccount}
		/>

		<ValueAccount
			id="valueAccount"
			name="valueAccount"
			text="Valor De La cuenta"
			icon="attach_money"
			classNameIcon="prefix"
			onChange={props.loadAccount}
		/>
	</div>
);

export default Fields;
