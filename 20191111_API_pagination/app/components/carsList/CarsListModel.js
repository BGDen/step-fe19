import {CarController} from "../car/CarController.js";

export class CarsListModel{
    constructor(backFunc){
        this.link = './data/mvswantedtransport_1.json';
        // this.link = './data/double.json';
        this.backFunc = backFunc;
        this.fabric = [];
    }

    getCars(){
        fetch(this.link).then(d => d.json()).then(data => {
            this.data = data;   
            this.backFunc();
        });
    }

    carFabric(link){
        this.data.forEach(car => this.fabric.push(new CarController(car, link)));
        return this.fabric.length;
    }

    showList(num){
        const len = this.fabric.length;
        const max = num * 10;
        for(let i = (num - 1) * 10; i < max && i < len; i++){
            this.fabric[i].render();
        }
    }
}