import {ModelGenerator} from '/app/Generator/ModelGenerator.js';
import {ViewGenerator} from '/app/Generator/ViewGenerator.js';

export class ControllerGenerator{
    constructor(){
        this.model = new ModelGenerator();
        this.view = new ViewGenerator();

        // this.view.addListener(this.clickGetRandom.bind(this));
        
        this.view.addListener(()=> this.clickGetRandom());
    }

    clickGetRandom(){
        const num = this.model.getRandom();
        this.view.renderRandom(num);
    }
}