import React, { Component } from 'react';
import { connect } from 'react-redux';

import { accountActions } from "../../../../actions/account.actions";

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';


class FormRetire extends Component {
	state = {
		retire: {
			numberAccountRetire: "",
			valueAccountRetire: 0,
		}
	}

	updateRetire = (e) => {
		e.preventDefault();
		this.props.dispatch(accountActions.updateAccountRetire(this.state.retire));
	}

	loadRetire = (event) => {
		const { retire } = this.state;
		const { value, name } = event.target;
		this.setState({
			retire: {
				...retire,
				[name]: value
			}
		})
	}

	render() {
		return (
			<div className="row">
				<Fields loadRetire={this.loadRetire} />
				<ActionBar updateRetire={this.updateRetire} />
			</div>
		);
	}
}

export default connect()(FormRetire);
