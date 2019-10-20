import {ModelInfo} from '/app/Info/ModelInfo.js';
import {ViewInfo} from '/app/Info/ViewInfo.js';

export class ControllerInfo{
    constructor(){
        this.model = new ModelInfo();
        this.view = new ViewInfo(
            this.clickBtnDate.bind(this),
            this.clickBtnClear.bind(this)
            );
    }

    clickBtnDate(){
        const txt = this.view.getDate();
        const arr = this.model.parseDate(txt);
        this.view.renderDates(arr);
    }

    clickBtnClear(){
        this.model.deleteAll();
        this.view.deleteAll();
    }
}