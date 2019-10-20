export class ModelInfo{
    constructor(){
        this.dates = JSON.parse(localStorage.getItem('dates')) || [];
    }

    parseDate(txt){
        const d = new Date(txt);
        this.dates.push(d.toDateString());
        localStorage.setItem('dates', JSON.stringify(this.dates));
        return [...this.dates];
    }
    deleteAll(){
        this.dates = [];
        localStorage.setItem('dates', '');
    }
}