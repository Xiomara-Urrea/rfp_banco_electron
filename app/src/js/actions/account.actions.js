import findIndex from 'lodash/findIndex'
import { makeRequestAsync } from '../services'
import { ACCOUNT_GET, ACCOUNT_GETBYID, ACCOUNT_CREATE, ACCOUNT_UPDATE, ACCOUNT_DELETE } from '../constants/account.constans';


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
            const clients = await makeRequestAsync(`/clients`, "GET");
            dispatch(success(clients.data));
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
            const client = await makeRequestAsync(`/clients/${id}`, "GET");
            dispatch(success(client.data));
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
            M.toast({html: `${account.data.status}`, classes: 'rounded'});
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const updateAccount = (client_id, clientEdit) => {

    const request = () => ({
        type: ACCOUNT_UPDATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, client) => ({
        type: ACCOUNT_UPDATE.SUCCESS,
        payload: {
            client,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: ACCOUNT_UPDATE.FAILURE,
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

            const clientUpdate = { firstName : clientEdit.firstName, lastName : clientEdit.lastName };
            const client = await makeRequestAsync(`/clients/${client_id}/client`, "PUT", clientUpdate);
            console.log(client)
            dispatch(success(index, client.data.client));
            M.toast({html: `${client.data.status}`, classes: 'rounded'});
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};


const deleteAccount= (client_id) => {
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
            M.toast({html: `${client.data.status}`, classes: 'rounded'});
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
    updateAccount,
    deleteAccount
}