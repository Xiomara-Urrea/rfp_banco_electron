import { REGISTER, LOGIN, LOGOUT, USERS_GETALL, USERS_DELETE, USERS_ACCOUNT_GETBYID } from '../constants/user.constans';
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
            if (user.data.status == "Username or password is incorrect") {
                M.toast({ html: `Username or password is incorrect`, classes: 'rounded' });
                return dispatch(failure({ error: user.data.status }));
            }
            dispatch(success(user.data.user));
            localStorage.setItem('user', JSON.stringify(user.data.user));
            history.push('/accounts');
        } catch (error) {
            M.toast({ html: `Username or password is incorrect`, classes: 'rounded' });
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };

}

const logout = () => {
    localStorage.removeItem('user');
    return { type: LOGOUT.SUCCESS };
}

const getByIdAccount = (user_id) => {
    const request = () => ({
        type: USERS_ACCOUNT_GETBYID.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = accounts => ({
        type: USERS_ACCOUNT_GETBYID.SUCCESS,
        payload: {
            accounts,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: USERS_ACCOUNT_GETBYID.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const user = await makeRequestAsync(`/users/${user_id}/account`, "GET");
            dispatch(success(user.data.accounts));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };

}

const getAll = () => {

}

const _delete = (id) => {

}

export const userActions = {
    login,
    logout,
    register,
    getAll,
    getByIdAccount,
    delete: _delete
};