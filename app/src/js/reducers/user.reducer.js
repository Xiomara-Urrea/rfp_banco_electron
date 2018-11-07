import { USERS_GETALL, USERS_DELETE, USERS_ACCOUNT_GETBYID } from '../constants/user.constans';
import { ACCOUNT_CREATE } from '../constants/account.constans';

const initialState = {
  users: [],
  accounts: [],
  isLoading: false,
  error: '',
};


export function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USERS_ACCOUNT_GETBYID.REQUEST:
    case USERS_ACCOUNT_GETBYID.FAILURE:
    case USERS_GETALL.REQUEST:
    case USERS_GETALL.SUCCESS:
    case USERS_GETALL.FAILURE:
    case USERS_GETALL.REQUEST:
    case USERS_DELETE.SUCCESS:
    case USERS_DELETE.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case USERS_ACCOUNT_GETBYID.SUCCESS: {
      const { accounts } = payload;
      return {
        ...state,
        ...payload
      };
    }
    case ACCOUNT_CREATE.SUCCESS: {
      const { account } = payload;
      return {
        ...state,
        accounts: [...state.accounts, account]
      };
    }
    default:
      return state
  }
}