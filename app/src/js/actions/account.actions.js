import findIndex from 'lodash/findIndex'
import { history } from '../store';
import { makeRequestAsync } from '../services'
import { ACCOUNT_GET, ACCOUNT_GETBYID, ACCOUNT_CREATE, ACCOUNT_UPDATE_CONSIG, ACCOUNT_UPDATE_RETIRE, ACCOUNT_UPDATE_TRANSFER, ACCOUNT_DELETE } from '../constants/account.constans';


const getAllAccounts = () => {
    const request = () => ({
        type: ACCOUNT_GET.REQUEST,
        payload: {
            clients: [],
            isLoading: true,
            error: '',
        },
    });

    const success = clients => ({
        type: ACCOUNT_GET.SUCCESS,
        payload: {
            clients,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_GET.FAILURE,
        payload: {
            isLoading: true,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const accounts = await makeRequestAsync(`/accounts`, "GET");
            dispatch(success(accounts.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const getById = (id) => {
    const request = () => ({
        type: ACCOUNT_GETBYID.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = client => ({
        type: ACCOUNT_GETBYID.SUCCESS,
        payload: {
            client,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_GETBYID.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const account = await makeRequestAsync(`/accounts/${id}`, "GET");
            dispatch(success(account.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const createAccount = (accountCreate) => {
    const request = () => ({
        type: ACCOUNT_CREATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = account => ({
        type: ACCOUNT_CREATE.SUCCESS,
        payload: {
            account,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_CREATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const account = await makeRequestAsync(`/accounts`, "POST", accountCreate);
            dispatch(success(account.data.account));
            M.toast({ html: `${account.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const updateAccountConsig = (accountUpdate) => {

    const request = () => ({
        type: ACCOUNT_UPDATE_CONSIG.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, account) => ({
        type: ACCOUNT_UPDATE_CONSIG.SUCCESS,
        payload: {
            account,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_UPDATE_CONSIG.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const accountUp = {
                numberAccount: accountUpdate.numberAccount,
                valueAccount: accountUpdate.valueAccountConsig
            };
            const account = await makeRequestAsync(`/accounts/${accountUpdate.numberAccount}/consign`, "PUT", accountUp);
            dispatch(success(account.data.account));
            history.push('/accounts');
            M.toast({ html: `${account.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            M.toast({ html: `${message}`, classes: 'rounded' });
            dispatch(failure({ error: message }));
        }
    };
};

const updateAccountRetire = (accountUpdate) => {

    const request = () => ({
        type: ACCOUNT_UPDATE_RETIRE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, account) => ({
        type: ACCOUNT_UPDATE_RETIRE.SUCCESS,
        payload: {
            account,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_UPDATE_RETIRE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const accountUp = {
                numberAccount: accountUpdate.numberAccountRetire,
                valueAccount: accountUpdate.valueAccountRetire
            };
            const account = await makeRequestAsync(`/accounts/${accountUpdate.numberAccount}/retire`, "PUT", accountUp);
            dispatch(success(account.data.account));
            history.push('/accounts');
            M.toast({ html: `${account.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            M.toast({ html: `${message}`, classes: 'rounded' });
            dispatch(failure({ error: message }));
        }
    };
};

const updateAccountTranfer = (accountUpdate) => {

    const request = () => ({
        type: ACCOUNT_UPDATE_TRANSFER.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, account) => ({
        type: ACCOUNT_UPDATE_TRANSFER.SUCCESS,
        payload: {
            account,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_UPDATE_TRANSFER.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const account = await makeRequestAsync(`/accounts`, "PUT", accountUpdate);
            dispatch(success(account.data.account));
            history.push('/accounts');
            M.toast({ html: `${account.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            M.toast({ html: `${message}`, classes: 'rounded' });
            dispatch(failure({ error: message }));
        }
    };
};

const deleteAccount = (client_id) => {
    const request = () => ({
        type: ACCOUNT_DELETE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = index => ({
        type: ACCOUNT_DELETE.SUCCESS,
        payload: {
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_DELETE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { clients } = getState().client;
            const index = findIndex(clients, { _id: client_id });

            if (index === -1) return dispatch(failure("Client Not found"));

            const client = await makeRequestAsync(`/clients/${client_id}`, "DELETE");
            dispatch(success(index));
            M.toast({ html: `${client.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure(message));
        }
    };
};

export const accountActions = {
    getAllAccounts,
    getById,
    createAccount,
    updateAccountConsig,
    updateAccountRetire,
    updateAccountTranfer,
    deleteAccount
}