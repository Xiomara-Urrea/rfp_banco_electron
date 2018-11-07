import React from 'react';

import ValueAccountOne from '../../../../Common/Input';
import ValueAccountTwo from '../../../../Common/Input';
import NumberAccountOne from '../../../../Common/Input';
import NumberAccountTwo from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<NumberAccountOne
			id="numberAccountOne"
			name="numberAccountOne"
			text="De:"
			icon="contact_phone"
			classNameIcon="prefix"
			onChange={props.loadTranfer}
		/>
		<NumberAccountTwo
			id="numberAccountTwo"
			name="numberAccountTwo"
			text="Para:"
			icon="email"
			classNameIcon="prefix"
			onChange={props.loadTranfer}
		/>
		<ValueAccountOne
			id="valueAccount"
			name="valueAccount"
			text="Valor de la transferencia"
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadTranfer}
		/>

	</div>
);

export default Fields;
