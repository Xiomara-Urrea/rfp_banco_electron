import { LOGIN, REGISTER, LOGOUT } from '../constants/user.constans';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case REGISTER.SUCCESS:
    case REGISTER.FAILURE:
    case LOGIN.FAILURE:
    case REGISTER.REQUEST:
      return { registering: true };
    case LOGIN.REQUEST:
    case LOGIN.SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGOUT.REQUEST:
      return {};
    case LOGOUT.SUCCESS:
      return { loggingIn: false };
    default:
      return state
  }
}