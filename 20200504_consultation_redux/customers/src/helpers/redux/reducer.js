import {
    INPUT_CUSTOMERS_COUNT,
    FETCH_CUSTOMERS_DATA
} from './constants';

export const customersReducer = ( state = { count : 0 }, action) => {
    const {type, data} = action;
    console.log('Reducer', action);
    switch(type){
        case INPUT_CUSTOMERS_COUNT:{
            console.log('in ',INPUT_CUSTOMERS_COUNT, data);
            return { count : data};
        }
        default:{
            return state;
        }
    }
};