import React, { Component } from 'react';
import { connect } from 'react-redux';

import { accountActions } from "../../actions/account.actions";
import { userActions } from "../../actions/user.actions";

import Form from './Form';
import Grid from './Grid';

class Account extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		account: {
			numberAccount: "",
			stateAccount: true,
			valueAccount: "",
			user_id: ""
		},
	}

	componentWillMount() {
		this.props.dispatch(userActions.getByIdAccount(this.props.user._id));
	}

	componentDidMount() {
		const { account } = this.state;
		account.user_id = this.props.user._id ;
		this.setState({ account });
	}

	createAccount = (e) => {
		e.preventDefault();
		this.props.dispatch(accountActions.createAccount(this.state.account));
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
		const { users } = this.props;
		if (users.isLoading) {
			if (!users.accounts) {
				return (
					<p>Loading....</p>
				)
			}
		}

		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createAccount={this.createAccount} loadAccount={this.loadAccount} />
				</div>
				<div className="col s12 m8 l9">
					<Grid accounts={users.accounts} optionsAccount={this.optionsAccount} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.authentication.user,
		users: state.users,
	}
};

export default connect(mapStateToProps)(Account);
