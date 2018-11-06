import { USERS_GETALL, USERS_DELETE } from '../constants/user.constans';

export function users(state = {}, action) {
  switch (action.type) {
    case USERS_GETALL.REQUEST:
      return {
        loading: true
      };
    case USERS_GETALL.SUCCESS:
      return {
        items: action.users
      };
    case USERS_GETALL.FAILURE:
      return {
        error: action.error
      };
    case USERS_GETALL.REQUEST:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case USERS_DELETE.SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case USERS_DELETE.FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}