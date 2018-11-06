import React, { Component } from 'react';
import { connect } from 'react-redux';

import { clientActions } from "../../actions/client.actions";

import Form from './Form';
import Grid from './Grid';
import Edit from './Edit';
import View from './View';
import Modal from '../Common/Modal';
import Progress from '../Common/Utils/Progress';

class Client extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		client: {
			firstName: "",
			lastName: "",
			client_id: "",
		},
		clientEdit: {
			firstName: '',
			lastName: '',
		},
		client_id: "",
		headerModal: "",
		contentModal: "",
	}

	componentWillMount() {
		this.props.dispatch(clientActions.getAllClient());
	}

	componentWillReceiveProps(newProps) {
		const { clientEdit } = this.state;
		clientEdit.firstName = newProps.client.firstName;
		clientEdit.lastName = newProps.client.lastName;
		this.setState({ clientEdit });
	}

	createClient = (e) => {
		e.preventDefault();
		this.props.dispatch(clientActions.createClient(this.state.client));
	}

	updateClient = (e) => {
		e.preventDefault();
		const { clientEdit , client_id } = this.state;
		this.props.dispatch(clientActions.updateClient(client_id, clientEdit));
		$('#modalClient').modal('close')
	}

	loadClient = (event) => {
		const { client } = this.state;
		const { value, name } = event.target;
		this.setState({
			client: {
				...client,
				[name]: value
			}
		})
	}

	loadClientEdit = (event) => {
		const { clientEdit } = this.state;
		const { value, name } = event.target;
		this.setState({
			clientEdit: {
				...clientEdit,
				[name]: value
			}
		})
	}

	optionsClient = (e) => {
		const { clientEdit } = this.state
		const { headerModal, contentModal, id } = e;

		this.state.client_id = id;

		this.setState({
			headerModal,
			contentModal,
			clientEdit
		});

		if (contentModal === "edit")
			this.props.dispatch(clientActions.getById(id));
		else if (contentModal === "view")
			this.props.dispatch(clientActions.getByIdCredit(id));

		$('#modalClient').modal('open')

	}

	render() {
		const { clients, client, clientCredit } = this.props;
		const { headerModal, contentModal, clientEdit } = this.state;

		if (clients.isLoading) {
			if (!clients.clients) {
				return (
					<Progress type="circle" />
				)
			}
		}

		let content = contentModal == "edit" ? content =
			<Edit client={clientEdit} updateClient={this.updateClient} loadClient={this.loadClientEdit} /> : content =
			<View client={clientCredit} />;

		return (
			<div className="row">
				<div className="col s12 m4 l3">
					<Form createClient={this.createClient} loadClient={this.loadClient} />
				</div>
				<div className="col s12 m8 l9">
					<Grid clients={clients.clients} optionsClient={this.optionsClient} />
				</div>
				{/* <Modal
					id="modalClient"
					header={headerModal}
					content={content}
				/> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	clients: state.client,
	client: state.client.client,
	clientCredit: state.client.clientCredit,
});

export default connect(mapStateToProps)(Client);
