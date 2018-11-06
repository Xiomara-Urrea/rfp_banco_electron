import { REGISTER, LOGIN, LOGOUT, USERS_GETALL, USERS_DELETE } from '../constants/user.constans';
import { userService } from '../services/user.service';
import { makeRequestAsync } from '../services'
import { history } from '../store';
// const logger = require('electron').remote.require('./logger');


const register = (userCreate) => {
    const request = (user) => { return { type: REGISTER.REQUEST, user } }
    const success = (user) => { return { type: REGISTER.SUCCESS, user } }
    const failure = (error) => { return { type: REGISTER.FAILURE, error } }

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const user = await makeRequestAsync(`/users`, "POST", userCreate);
            dispatch(success(user.data.user));
            history.push('/login');
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const login = (username, password) => {
    const request = (user) => { return { type: LOGIN.REQUEST, user } }
    const success = (user) => { return { type: LOGIN.SUCCESS, user } }
    const failure = (error) => { return { type: LOGIN.FAILURE, error } }

    const userAut = {
        username,
        password
    }

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const user = await makeRequestAsync(`/users/login`, "POST", userAut);
            dispatch(success(user.data.user));
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/clients');
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };

}

const logout = () => {
    localStorage.removeItem('user');
    return { type: LOGOUT.SUCCESS };
}


const login2 = (username, password) => {
    const request = (user) => { return { type: LOGIN.REQUEST, user } }
    const success = (user) => { return { type: LOGIN.SUCCESS, user } }
    const failure = (error) => { return { type: LOGIN.FAILURE, error } }

    return dispatch => {
        dispatch(request({ username }));
        // logger.log('holaaaaaa');
        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/clients');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


}


const register2 = (user) => {
    const request = (user) => { return { type: REGISTER.REQUEST, user } }
    const success = (user) => { return { type: REGISTER.SUCCESS, user } }
    const failure = (error) => { return { type: REGISTER.FAILURE, error } }
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


}

const getAll = () => {
    const request = () => { return { type: USERS_GETALL.REQUEST } }
    const success = (users) => { return { type: USERS_GETALL.SUCCESS, users } }
    const failure = (error) => { return { type: USERS_GETALL.FAILURE, error } }

    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };


}

const _delete = (id) => {
    const request = (id) => { return { type: USERS_DELETE.REQUEST, id } }
    const success = (id) => { return { type: USERS_DELETE.SUCCESS, id } }
    const failure = (id, error) => { return { type: USERS_DELETE.FAILURE, id, error } }
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };


}

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};