export class Square{
    constructor(a = 0){
        this._squareSide = a;
    }
    set d(n){
        this._squareSide = n == 0? 1: Math.abs(n);
    }
    get d(){
        return this._squareSide;
    }
    set perimetr(p){
        this._squareSide = Math.abs(p/4);
    }

    // get 
}