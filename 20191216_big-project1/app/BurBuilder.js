import {Burger} from './Burger.js';

export class BurBuilder{
    constructor(){
        this.isBurger = false;

        return this;
    }

    createBurger(burgerName){
        this.isBurger = true;
        this.burger = new Burger(burgerName);

        return this;
    }

    withCucumber(count){
        this.burger.addCucumber(count);

        return this;
    }

    withCheese(cheeseName){
        this.burger.addCheese(cheeseName);

        return this;
    }

    withBurger(burger){
        this.burger.addBurger(burger);

        return this;
    }

    get result(){
        return this.burger;
    }

}