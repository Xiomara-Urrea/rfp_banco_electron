import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import Client from '.';

class AppClient extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="ACCOUNTS" />
				<Client />
			</div>
		);
	}
}

export { AppClient };
