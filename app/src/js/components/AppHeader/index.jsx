import React from 'react';

import Marca from './Partials/Marca';

const AppHeader = (props) => (
	<nav className="pink">
		<div className="nav-wrapper center-align">
			<Marca name={props.name}/>
		</div>
	</nav>
);

export default AppHeader;
