import { ACCOUNT_GET, ACCOUNT_GETBYID, ACCOUNT_CREATE, ACCOUNT_UPDATE, ACCOUNT_DELETE } from '../constants/account.constans';

const initialState = {
  accounts: [],
  account: '',
  isLoading: false,
  error: '',
};


export function account(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACCOUNT_GET.REQUEST:
    case ACCOUNT_GET.SUCCESS:
    case ACCOUNT_GET.FAILURE:
    case ACCOUNT_GETBYID.REQUEST:
    case ACCOUNT_GETBYID.FAILURE:
    case ACCOUNT_CREATE.REQUEST:
    case ACCOUNT_CREATE.FAILURE:
    case ACCOUNT_UPDATE.REQUEST:
    case ACCOUNT_UPDATE.FAILURE:
    case ACCOUNT_DELETE.REQUEST:
    case ACCOUNT_DELETE.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case ACCOUNT_GETBYID.SUCCESS: {
      const { account } = payload;
      return {
        ...state,
        account,
      };
    }
    case ACCOUNT_CREATE.SUCCESS: {
      const { account } = payload;
      return {
        ...state,
        accounts: [...state.accounts, account]
      };
    }

    case ACCOUNT_UPDATE.SUCCESS: {
      const { client, index, ...propEstados } = payload;
      return {
        ...state,
        ...propEstados,
        accounts: [
          ...state.accounts.slice(0, index),
          client,
          ...state.accounts.slice(index + 1),
        ],
      };
    }

    case ACCOUNT_DELETE.SUCCESS: {
      const { index } = payload;
      return {
        ...state,
        accounts: [
          ...state.accounts.slice(0, index),
          ...state.accounts.slice(index + 1),
        ],
      };
    }

    default:
      return state
  }
}