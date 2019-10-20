import {UserView} from '/app/User/UserView.js';
import {UserModel} from '/app/User/UserModel.js';

export class UserController{
    constructor(){
        this.view = new UserView(()=> this.clickBtnHandler());
        this.model = new UserModel((d)=> this.receiveData(d));
    }

    clickBtnHandler(){
        //Запустить модель
        this.model.getUser();
    }

    receiveData(data){
        this.view.renderUser(JSON.parse(data).results[0]);
    }
}