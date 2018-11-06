import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clienActions, clientActions } from "../../../../actions/client.actions";

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
		const { client } = this.props;
		return (
			<tr>
				<td>{client.firstName}</td>
				<td>{client.lastName}</td>
				<td>
					<ActionBarGrid
						id={client._id}
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

export default connect(mapStateToProps)(Row);
