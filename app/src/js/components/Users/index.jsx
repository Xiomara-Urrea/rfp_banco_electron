import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clientActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import Edit from './Edit';
import Modal from '../Common/Modal';
import Progress from '../Common/Utils/Progress';

class Users extends Component {
	constructor(props) {
		super(props);
	}

	state = {

	}
	createUsers = (e) => {
		console.log("create Product")
	}

	updateUsers = (e) => {

	}

	loadUsers = (event) => {
		console.log("load Product")
	}

	loadUsersEdit = (event) => {

	}

	optionsUsers = (e) => {

	}

	render() {
		const { users } = this.props;
		const { contentModal, clientEdit } = this.state;
		{/* 
		if (product.isLoading) {
			if (!product.product) {
				return (
					<Progress type="circle" />
				)
			}
		}

		let content = contentModal == "edit" ? content =
			<Edit client={clientEdit} updateUsers={this.updateUsers} loadUsers={this.loadProductEdit} /> : content =
			<View client={product} />;
		*/}
		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createUsers={this.createUsers} loadUsers={this.loadUsers} />
				</div>
				<div className="col s12 m8 l9">
					<Grid users={users} optionsUsers={this.optionsUsers} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Users);
