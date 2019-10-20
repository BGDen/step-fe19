export class ViewGenerator{
    constructor(){
        this.btn = document.querySelector('.btnRandom');
        this.genDOM = document.querySelector('.generator');
    }

    renderRandom(num){
        this.genDOM.innerText = num;
    }

    addListener(func){
        this.btn.addEventListener('click', func);
    }
}