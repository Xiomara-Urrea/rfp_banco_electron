import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import Movement from '.';

class AppMovementBank extends Component {
	render() {
		return (
			<div className="container">
				<AppHeader name="MovimientoBancario" />
				<Movement />
			</div>
		);
	}
}

export { AppMovementBank };
