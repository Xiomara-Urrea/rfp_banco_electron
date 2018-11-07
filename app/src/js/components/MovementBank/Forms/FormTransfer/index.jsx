import React, { Component } from 'react';
import { connect } from 'react-redux';

import { accountActions } from "../../../../actions/account.actions";

import Fields from './Partials/Fields';
import ActionBar from './Partials/ActionBar';


class FormTransfer extends Component {
	state = {
		transfer: {
			numberAccountOne: "",
			numberAccountTwo: "",
			valueAccount: "",
		}
	}

	updateTransfer = (e) => {
		e.preventDefault();
		this.props.dispatch(accountActions.updateAccountTranfer(this.state.transfer));
	}

	loadTranfer = (event) => {
		const { transfer } = this.state;
		const { value, name } = event.target;
		this.setState({
			transfer: {
				...transfer,
				[name]: value
			}
		})
	}

	render() {
		return (
			<div className="row">
				<Fields loadTranfer={this.loadTranfer} />
				<ActionBar updateTransfer={this.updateTransfer} />
			</div>
		);
	}
}

export default connect()(FormTransfer);
