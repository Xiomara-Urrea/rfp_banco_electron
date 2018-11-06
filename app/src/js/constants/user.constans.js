import { defineAction } from '../utils/defineAction';
import { REQUEST, SUCCESS, FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS, FAILURE];

export const REGISTER = defineAction('REGISTER', accionsHttp);
export const LOGIN = defineAction('LOGIN', accionsHttp);
export const LOGOUT = defineAction('LOGOUT', accionsHttp);
export const USERS_GETALL = defineAction('USERS_GETALL', accionsHttp);
export const USERS_DELETE = defineAction('USERS_DELETE', accionsHttp);
