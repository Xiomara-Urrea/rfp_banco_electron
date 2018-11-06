import React from 'react';

import Username from '../../../../Common/Input';
import Password from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<Username
			id="username"
			name="username"
			text="Username"
			className="col s6 offset-s3"
			icon="people"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
		<Password
			id="password"
			name="password"
			text="Password"
			type="password"
			className="col s6 offset-s3"
			autoFocus={true}
			icon="fingerprint"
			classNameIcon="prefix"
			onChange={props.handleChange}
		/>
	</div>
);

export default Fields;
