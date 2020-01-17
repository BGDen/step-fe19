import { TemplaterUsers } from "./TemplaterUsers.js";

export class ViewUsers{
    constructor(clickFunc){
        this.template = new TemplaterUsers();
        this.domUsers = document.querySelector('.users');
        this.listener = clickFunc;
    }

    renderUsers(users){
        this.domUsers.innerHTML = users.map(u => this.template.getHtml(u)).join('');
        [...this.domUsers.querySelectorAll('.btn-posts')]
            .forEach(btn => btn.addEventListener('click', this.listener));
    }

    getId(ev){
        return ev.target.dataset.id;
    }
}