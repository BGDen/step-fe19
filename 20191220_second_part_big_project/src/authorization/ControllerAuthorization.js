import { ViewAuthorization } from "./ViewAuthorization.js";

export class ControllerAuthorization{
    constructor(){
        this.view = new ViewAuthorization();
        this.view.addListeners(this.clickBtnWork.bind(this));//Передаю ссылку на метод как аргумент для обработки клика
    }

    clickBtnWork(){
        console.log(this.view.getInpValue());
    }

}