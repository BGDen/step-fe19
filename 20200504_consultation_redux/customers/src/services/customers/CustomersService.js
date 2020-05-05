import { API } from "../../env.js";

export class CustomersService{
    static GET(count = 10){
        return fetch(`${API.CUSTOMERS}${count}`)
        .then(r => r.json())
        .then(d => {
            console.log(d);
            return d.results.map(c => ({
                picture : c.picture.large,
                email : c.email,
                name : c.name,
                gender : c.gender,
                uuid : c.login.uuid
            }));
        });
    }
}