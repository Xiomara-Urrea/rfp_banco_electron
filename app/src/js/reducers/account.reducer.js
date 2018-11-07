import { ACCOUNT_GET, ACCOUNT_GETBYID, ACCOUNT_CREATE, ACCOUNT_UPDATE_CONSIG, ACCOUNT_UPDATE_RETIRE, ACCOUNT_UPDATE_TRANSFER, ACCOUNT_DELETE } from '../constants/account.constans';

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
    case ACCOUNT_UPDATE_CONSIG.REQUEST:
    case ACCOUNT_UPDATE_CONSIG.FAILURE:
    case ACCOUNT_UPDATE_RETIRE.REQUEST:
    case ACCOUNT_UPDATE_RETIRE.SUCCESS:
    case ACCOUNT_UPDATE_RETIRE.FAILURE:
    case ACCOUNT_UPDATE_TRANSFER.REQUEST:
    case ACCOUNT_UPDATE_TRANSFER.SUCCESS:
    case ACCOUNT_UPDATE_TRANSFER.FAILURE:
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

    case ACCOUNT_UPDATE_CONSIG.SUCCESS: {
      const { account, index, ...propEstados } = payload;
      return {
        ...state,
        ...propEstados,
        accounts: [
          ...state.accounts.slice(0, index),
          account,
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