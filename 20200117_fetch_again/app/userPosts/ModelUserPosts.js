export class ModelUserPosts{
    constructor(){
        this.link = 'https://jsonplaceholder.typicode.com/posts?userId=';
    }

    getData(id){
        return fetch(`${this.link}${id}`).then(d => d.json()).then(dd => dd.map(post=>post.title));
    }

}