import {CarsListModel} from "./CarsListModel.js";
import {CarsListView} from "./CarsListView.js";

export class CarsListController{
    constructor(){
        // this.model = new CarsListModel(this.handleGetData.bind(this));
        this.model = new CarsListModel(d => this.handleGetData(d));
        this.view = new CarsListView(this.handleClickPaginator.bind(this));
        this.model.getCars();
    }

    handleGetData(){
        this.len = this.model.carFabric(this.view.getLink());
        this.view.renderPagination(this.len, 1);
        this.showList(1);
    }

    showList(num){
        this.view.clearList();
        this.model.showList(num);
    }

    handleClickPaginator(ev){
        console.log(ev.target.innerText);
        this.view.renderPagination(this.len, Number(ev.target.innerText));
        this.showList(ev.target.innerText);
    }
}