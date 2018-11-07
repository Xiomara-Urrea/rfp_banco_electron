import { defineAction } from '../utils/defineAction';
import { REQUEST, SUCCESS, FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS, FAILURE];

export const ACCOUNT_GET = defineAction('ACCOUNT_GET', accionsHttp);
export const ACCOUNT_GETBYID = defineAction('ACCOUNT_GET', accionsHttp);
export const ACCOUNT_CREATE = defineAction('ACCOUNT_CREATE', accionsHttp);
export const ACCOUNT_UPDATE_CONSIG = defineAction('ACCOUNT_UPDATE_CONSIG', accionsHttp);
export const ACCOUNT_UPDATE_RETIRE = defineAction('ACCOUNT_UPDATE_RETIRE', accionsHttp);
export const ACCOUNT_UPDATE_TRANSFER = defineAction('ACCOUNT_UPDATE_TRANSFER', accionsHttp);
export const ACCOUNT_DELETE = defineAction('ACCOUNT_DELETE', accionsHttp);
