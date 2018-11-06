import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clientActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import Progress from '../Common/Utils/Progress';

class Account extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		account: {
			numberAccount: "",
			stateAccount: true,
			valueAccount: "",
		}
	}

	componentWillMount() {
		this.props.dispatch(clientActions.getAllClient());
	}

	componentWillReceiveProps(newProps) {
		// const { clientEdit } = this.state;
		// clientEdit.firstName = newProps.client.firstName;
		// clientEdit.lastName = newProps.client.lastName;
		// this.setState({ clientEdit });
	}

	createAccount = (e) => {
		e.preventDefault();
		console.log(this.state.account)
		this.props.dispatch();
	}

	updateAccount = (e) => {

	}

	loadAccount = (event) => {
		const { account } = this.state;
		const { value, name } = event.target;
		this.setState({
			account: {
				...account,
				[name]: value
			}
		})
	}

	render() {
		const { clients, client, clientCredit } = this.props;

		if (clients.isLoading) {
			if (!clients.clients) {
				return (
					<Progress type="circle" />
				)
			}
		}

		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createAccount={this.createAccount} loadAccount={this.loadAccount} />
				</div>
				<div className="col s12 m8 l9">
					<Grid clients={clients.clients} optionsClient={this.optionsClient} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state.authentication.user)
	return {
		clients: state.client,
		client: state.client.client,
		clientCredit: state.client.clientCredit,
	}
};

export default connect(mapStateToProps)(Account);
