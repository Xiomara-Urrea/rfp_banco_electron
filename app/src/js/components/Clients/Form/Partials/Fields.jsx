import React from 'react';

import NumberAccount from '../../../Common/Input';
import StateAccount from '../../../Common/Input';
import ValueAccount from '../../../Common/Input';

const Fields = (props) => (

	<div>

		<NumberAccount
			id="NumberAccount"
			name="NumberAccount"
			text="Numero De La Cuenta"
			autoFocus={true}
			icon="credit_card"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>

		<StateAccount
			id="StateAccount"
			name="StateAccount"
			text="Estado De La Cuenta"
			icon="chrome_reader_mode"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>

		<ValueAccount
			id="ValueAccount"
			name="ValueAccount"
			text="Valor De La cuenta"
			icon="attach_money"
			classNameIcon="prefix"
			onChange={props.loadClient}
		/>

	</div>
);

export default Fields;
