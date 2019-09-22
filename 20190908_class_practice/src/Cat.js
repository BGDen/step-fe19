class Cat{
    constructor(){
        // this.name = '';
    }

    addName(n){
        this.name = n;
        this.murchat();
    }

    murchat(){
        console.log(`${this.name}: Мур-мур-мур. Хочу колбасу`);
    }
}