export class ModelrUsers{
    constructor(){
        this.link = "https://jsonplaceholder.typicode.com/users";
        this.data = [];
    }
    getData(){
        return fetch(this.link).then(d => d.json()).then(dd => {
            this.data = dd;
            return this.prepareData();
        });
    }

    prepareData(){
        console.log(this.data); 
        return this.data.map(el => {
            return {
                id      : el.id,
                name    : el.name,
                username: el.username, 
                email   : el.email
            };
        })
    }
}