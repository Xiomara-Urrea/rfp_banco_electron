import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userActions } from "../../../actions/user.actions";

import Form from './Form';
import AppHeader from '../../AppHeader';

class AppRegister extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phone: '',
            email: '',
            user_id: '',
        },
        submitted: false
    }
    handleChange = (e) => {
        const { user } = this.state;
        const { name, value } = e.target;
        this.setState({
			user: {
				...user,
				[name]: value
			}
		})
    }

    //Validacion de campos requeridos
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(userActions.register(this.state.user));
    }

    render() {
        return (
            <div className="container">
                <AppHeader name="REGISTRO" />
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
};

const connectedAppRegister = connect(mapStateToProps)(AppRegister)
export { connectedAppRegister as AppRegister }
