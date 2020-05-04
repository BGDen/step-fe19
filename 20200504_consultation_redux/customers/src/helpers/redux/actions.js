import {
    INPUT_CUSTOMERS_COUNT,
    FETCH_CUSTOMERS_DATA
} from './constants';

export const customersCount = data => ({
    type : INPUT_CUSTOMERS_COUNT,
    data
});