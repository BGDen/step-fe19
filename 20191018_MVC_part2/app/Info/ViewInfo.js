export class ViewInfo{
    constructor(funcAdd, funcClear){
        this.inpDate = document.querySelector('.inp');
        this.list = document.querySelector('.list');
        this.btn = document.querySelector('.btnDate');
        this.clear = document.querySelector('.btnClear');

        this.btn.addEventListener('click', funcAdd);
        this.clear.addEventListener('click', funcClear);
    }

    getDate(){
        return this.inpDate.value;
    }

    renderDates(arr){
        this.removeLi();
        arr.reverse().forEach(e => this.addLi(e));
    }

    addLi(dateString){
        const li = document.createElement('li');
        li.innerText = dateString;
        li.classList.add(dateString.split(' ')[0]);
        this.list.appendChild(li);
    }

    removeLi(){
        while(this.list.hasChildNodes()){
            this.list.removeChild(this.list.firstChild);
        }
    }

    deleteAll(){
        this.removeLi();
        this.inpDate.value = '';                
    }
}