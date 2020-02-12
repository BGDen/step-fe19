import { CarView } from "./CarView.js";
import { CarModel } from "./CarModel.js";

export class CarController{
    constructor(){
        this.view = new CarView(this.handleClickSearch.bind(this));
        this.model = new CarModel();

        this.init();
    }

    init(){
        this.model.loadData().then(d=> this.view.renderCars(d));
    }

    handleClickSearch(){
        //Выкачать введенный текст в поиске
        const searchStr = this.view.searchValue;

        //Передать текст Model
        //ПОлучить из модели новые данные для рендера
        const searchedData = this.model.getSearchedData(searchStr);

        //Эти данные передать view для рендера новых карточек
        this.view.renderCars(searchedData);
    }
}