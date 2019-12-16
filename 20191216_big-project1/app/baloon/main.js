import {Baloon} from './Baloon.js';

class Generator{
    constructor(){
        this.isGameOn = true;
        this.baloons = [];
        this.time = 10;
        this.intervalID = setInterval(this.showTIme.bind(this), 1000);
        this.createBallon();
    }

    showTIme(){
        --this.time;
        if(this.time <= 0){
            clearInterval(this.intervalID);
            this.isGameOn = false;
            console.log('Проиграл');
        }else{
            console.log(this.time);
        }        
    }

    randTime(min = 2000, max = 4000){
        return Math.floor(Math.random() * (max - min) + min);
    }

    createBallon(){
        if(this.isGameOn){
            this.baloons.push(new Baloon());
        
            setTimeout(this.createBallon.bind(this), this.randTime());
        }        
    }

}

const gen = new Generator();