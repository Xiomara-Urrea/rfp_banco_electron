import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import Account from '.';

class AppAccount extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="ACCOUNTS" />
				<Account />
			</div>
		);
	}
}

export { AppAccount };
