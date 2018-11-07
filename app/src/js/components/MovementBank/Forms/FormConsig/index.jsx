import React, { Component } from 'react';
import { connect } from 'react-redux';

import { accountActions } from "../../../../actions/account.actions";

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';


class FormConsig extends Component {
	state = {
		consig: {
			numberAccount: "",
			valueAccountConsig: 0,
		},
		user_id: ""
	}

	updateConsig = (e) => {
		e.preventDefault();
		this.props.dispatch(accountActions.updateAccountConsig(this.state.consig));
	}

	loadConsig = (event) => {
		const { consig } = this.state;
		const { value, name } = event.target;
		this.setState({
			consig: {
				...consig,
				[name]: value
			}
		})
	}

	render() {
		return (
			<div className="row">
				<Fields loadConsig={this.loadConsig} />
				<ActionBar updateConsig={this.updateConsig}/>
			</div>
		);
	}
}

export default connect()(FormConsig);