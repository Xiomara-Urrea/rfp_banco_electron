import { defineAction } from '../utils/defineAction';
import {REQUEST, SUCCESS,FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS,FAILURE];

export const ESTADO_CLIENT = defineAction('ESTADO_CLIENTS',
	['LIMPIAR_FORMULARIO', 'GUARDAR_NOMBRE', 'GUARDAR_CELULAR']
);
export const CLIENT_GET = defineAction('CLIENT_GET', accionsHttp);
export const CLIENT_GETBYID = defineAction('CLIENT_GET', accionsHttp);
export const CLIENT_CREATE = defineAction('CLIENT_CREATE', accionsHttp);
export const CLIENT_UPDATE = defineAction('CLIENT_UPDATE', accionsHttp);
export const CLIENT_DELETE = defineAction('CLIENT_DELETE', accionsHttp);
export const CLIENT_CREDIT_GETBYID = defineAction('CLIENT_CREDIT_GETBYID', accionsHttp);
