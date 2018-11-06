import { CLIENT_GET, CLIENT_GETBYID, CLIENT_CREATE, CLIENT_UPDATE, CLIENT_DELETE, CLIENT_CREDIT_GETBYID } from '../constants/client.constans';

const initialState = {
  clients: [],
  client: '',
  clientCredit: '',
  isLoading: false,
  error: '',
};


export function client(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_GET.REQUEST:
    case CLIENT_GET.SUCCESS:
    case CLIENT_GET.FAILURE:
    case CLIENT_GETBYID.REQUEST:
    case CLIENT_GETBYID.FAILURE:
    case CLIENT_CREATE.REQUEST:
    case CLIENT_CREATE.FAILURE:
    case CLIENT_UPDATE.REQUEST:
    case CLIENT_UPDATE.FAILURE:
    case CLIENT_DELETE.REQUEST:
    case CLIENT_DELETE.FAILURE:
    case CLIENT_CREDIT_GETBYID.REQUEST:
    case CLIENT_CREDIT_GETBYID.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case CLIENT_GETBYID.SUCCESS: {
      const { client } = payload;
      return {
        ...state,
        client,
      };
    }
    case CLIENT_CREDIT_GETBYID.SUCCESS: {
      const { clientCredit } = payload;
      return {
        ...state,
        clientCredit,
      };
    }
    case CLIENT_CREATE.SUCCESS: {
      const { client } = payload;
      return {
        ...state,
        clients: [...state.clients, client]
      };
    }

    case CLIENT_UPDATE.SUCCESS: {
      const { client, index, ...propEstados } = payload;
      return {
        ...state,
        ...propEstados,
        clients: [
          ...state.clients.slice(0, index),
          client,
          ...state.clients.slice(index + 1),
        ],
      };
    }

    case CLIENT_DELETE.SUCCESS: {
      const { index } = payload;
      return {
        ...state,
        clients: [
          ...state.clients.slice(0, index),
          ...state.clients.slice(index + 1),
        ],
      };
    }

    default:
      return state
  }
}