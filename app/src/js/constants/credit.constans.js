import { defineAction } from '../utils/defineAction';
import { REQUEST, SUCCESS, FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS, FAILURE];

export const CREDIT_GET = defineAction('CREDIT_GET', accionsHttp);
export const CREDIT_GETBYID = defineAction('CREDIT_GET', accionsHttp);
export const CREDIT_UPDATE = defineAction('CREDIT_UPDATE', accionsHttp);
