import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

class Movement extends Component {
	render() {
		const { } = this.props;
		return (
			<Card />
		);
	}
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Movement);
