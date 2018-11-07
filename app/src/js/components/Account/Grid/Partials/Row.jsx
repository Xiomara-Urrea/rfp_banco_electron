import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clientActions } from "../../../../actions/account.actions";

import ActionBarGrid from './ActionBarGrid';

class Row extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		headerModal: "",
		contentModal: "",
	}

	onEdit = (id) => {
		const data = {
			headerModal: "Edit Client ",
			contentModal: "edit",
			id: id,
		};
		this.props.optionsClient(data)
	}

	onDelete = (id) => {
		this.props.dispatch(clientActions.deleteClient(id));
	}

	onView = (id) => {
		const data = {
			headerModal: "View Client ",
			contentModal: "view",
			id: id,
		};
		this.props.optionsClient(data)
	}
	render() {
		const { account } = this.props;
		return (
			<tr>
				<td>{account.numberAccount}</td>
				<td>{account.valueAccount}</td>
				<td>
					<ActionBarGrid
						id={account._id}
						onEdit={this.onEdit}
						onDelete={this.onDelete}
						onView={this.onView}
					/>

				</td>
			</tr>
		);
	}
};

const mapStateToProps = (state) => ({
	svgArr: state.client.clients[0].credit
});

export default connect()(Row);
