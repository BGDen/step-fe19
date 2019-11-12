import {CarView} from "./CarView.js";
import {CarModel} from "./CarModel.js";

export class CarController{
    constructor(car, link){
        this.model = new CarModel(car);
        this.view = new CarView(car, link);
    }
    render(){
        this.view.renderCar();
    }
}