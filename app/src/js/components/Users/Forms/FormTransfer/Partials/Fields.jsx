import React from 'react';

import ValueAccountOne from '../../../../Common/Input';
import ValueAccountTwo from '../../../../Common/Input';
import NumberAccountOne from '../../../../Common/Input';
import NumberAccountTwo from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<ValueAccountOne
			id="valueAccountOne"
			name="valueAccountOne"
			text="Valor De La Cuenta 1"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<ValueAccountTwo
			id="valueAccountTwo"
			name="valueAccountTwo"
			text="Valor De La Cuenta 2 "
			icon="gps_fixed"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		
		<NumberAccountOne
			id="numberAccountOne"
			name="numberAccountOne"
			text="Numero De La Cuenta 1"
			icon="contact_phone"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		<NumberAccountTwo
			id="numberAccountTwo"
			name="numberAccountTwo"
			text="Numero De La Cuenta 2"
			icon="email"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

	</div>
);

export default Fields;
