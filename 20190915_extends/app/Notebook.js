import {Paper} from '/app/Paper.js';

export class Notebook extends Paper{
    constructor(name = 'notebook', text = 'Notebook:'){
        super(text);
        // this.text = text;
        this.name = name;
    }
    showName(){
        return this.name;
    }

    calcWords(){
        return this.text.split(/[\s\r\n]/).length;
    }
}