export class RedBaloon{
    constructor(){
        this.counter = 0;
        this.renderBaloon();
    }
    renderBaloon(){
        this.domElement = document.createElement('div');
        this.domElement.classList.add('baloon');
        this.domElement.style.top = `${this.getRandom(0, 700)}px`;
        this.domElement.style.left = `${this.getRandom(0, 1000)}px`;
        this.listenerLink = this.clickBaloon.bind(this);
        this.domElement.addEventListener('click', this.listenerLink);

        document.body.append(this.domElement);
    }
    getRandom(min = 0, max = 100){
        return Math.floor(Math.random() * (max - min) + min);
    }

    clickBaloon(){
        if(this.counter < 10){
            this.domElement.innerText = ++this.counter;
        }else{
            this.deleteListener();
        }
        
    }

    deleteListener(){
        this.domElement.removeEventListener('click', this.listenerLink);
    }


}