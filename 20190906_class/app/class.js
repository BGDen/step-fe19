class Auto{
    constructor(info){
        // this.id = info.id;
        // this.mark = info.mark;
        // this.price = info.price;
        // this.year = info.year;

        for(name in info){
            this[name] = info[name];
        }
    }
}

class AutoPark{
    constructor(){
        this.cars = [];
    }
    add(car){
        this.cars.push(car);
    }
}

class AutoProm{
    constructor(){}
    generate(count = 1){
        const marks = ['Audi A6', 'Audi A5', 'Audi A7', 'BMW X5', 
                        'Mercedes-Benz GLE', 'Chevrolet Aveo', 'Daewoo Lanos'],
            minY = 1999,
            maxY = 2018,
            minP = 4500,
            maxP = 30000,
            cars = [];

        for(let i = 0; i < count; i++){
            cars.push({
                id : this.genId(),
                mark : marks[Math.floor(Math.random() * marks.length)],
                price : Math.floor(Math.random() * (maxP - minP) + minP),
                year : Math.floor(Math.random() * (maxY - minY) + minY)
            });
        }

        return cars;
    }

    genId(){
        return this.genLetter() + this.genLetter() + 
        Math.floor(Math.random() * 10000) + 
        this.genLetter() + this.genLetter();
    }
    genLetter(){
        const idLetters = 'ABCEHIKOXM';
        return idLetters[Math.floor(Math.random() *  idLetters.length)];
    }
}


const autopark = new AutoPark(),
    prom = new AutoProm(),
    arr = prom.generate(10);

arr.forEach((c)=>{
    autopark.add(c);
});

// console.log(a1);
console.log(autopark);