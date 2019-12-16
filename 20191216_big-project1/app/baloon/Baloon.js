export class Baloon{
    constructor(){
        this.createBaloon();
    }

    createBaloon(){
        this.baloon = document.createElement('div');
        this.baloon.classList.add('baloon');
        this.baloon.style.left = `${this.getRandom()}px`;
        this.baloon.addEventListener('click', this.clickListener.bind(this));
        document.body.append(this.baloon);
    }

    getRandom(min = 0, max = 1000){
        return Math.floor(Math.random() * (max - min) + min);
    }

    clickListener(){
        // document.body.removeChild(this.baloon);
        this.baloon.remove();
        delete this.baloon;
    }
}