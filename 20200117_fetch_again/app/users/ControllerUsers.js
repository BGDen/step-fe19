import { ModelrUsers } from "./ModelUsers.js";
import { ViewUsers } from "./ViewUsers.js";

export class ControllerUsers{
    constructor({publish}){
        this.model = new ModelrUsers();
        this.view = new ViewUsers(this.handleBtnClick.bind(this));
        this.publish = publish;

        this.getData();
    }

    getData(){
        this.model.getData().then(d => this.view.renderUsers(d));
    }

    handleBtnClick(ev){
        let id = this.view.getId(ev);
        this.publish('show-posts', id);
    }
}