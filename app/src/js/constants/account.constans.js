import { defineAction } from '../utils/defineAction';
import { REQUEST, SUCCESS, FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS, FAILURE];

export const ACCOUNT_GET = defineAction('ACCOUNT_GET', accionsHttp);
export const ACCOUNT_GETBYID = defineAction('ACCOUNT_GET', accionsHttp);
export const ACCOUNT_CREATE = defineAction('ACCOUNT_CREATE', accionsHttp);
export const ACCOUNT_UPDATE = defineAction('ACCOUNT_UPDATE', accionsHttp);
export const ACCOUNT_DELETE = defineAction('ACCOUNT_DELETE', accionsHttp);
