import {API} from "../../env.js";

export class CustomersService{
    static GET(){
        return fetch(API.CUSTOMERS)
        .then(r => r.json())
        .then(d => {
            console.log(d);
        });
    }
}