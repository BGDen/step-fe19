import {createStore} from 'redux';
import {customersReducer} from './reducer';


export const configStore =_=> createStore(customersReducer);