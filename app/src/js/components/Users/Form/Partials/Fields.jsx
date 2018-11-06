import React from 'react';

import Nombre from '../../../Common/Input';
import Apellido from '../../../Common/Input';
import Cedula from '../../../Common/Input';
import Direccion from '../../../Common/Input';
import Celular from '../../../Common/Input';
import Email from '../../../Common/Input';

const Fields = (props) => (
	<div>
		<Nombre
			id="nombre"
			name="Nombre"
			text="Nombre"
			autoFocus={true}
			icon="account_circle"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

		<Apellido
			id="apellido"
			name="Apellido"
			text="Apellido"
			icon="perm_identity"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		<Cedula
			id="cedula"
			name="Cedula"
			text="Cedula"
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		<Direccion
			id="direccion"
			name="Direccion"
			text="Direccion"
			icon="gps_fixed"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		<Celular
			id="celular"
			name="Celular"
			text="Celular"
			icon="contact_phone"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>
		<Email
			id="email"
			name="Email"
			type="email"
			text="Email"
			icon="email"
			classNameIcon="prefix"
			onChange={props.loadUsers}
		/>

	</div>
);

export default Fields;
