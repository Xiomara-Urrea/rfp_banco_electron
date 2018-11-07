import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Collapsibles';

class Users extends Component {
	render() {
		const { } = this.props;
		return (
			<Card />
		);
	}
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Users);
