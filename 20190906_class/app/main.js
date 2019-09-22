//1 способ. Литеральный
let s1 = {
    name : 'Dog',
    guf : function(){
        console.log('Hello, I am a dog');
    }
};

//2 способ. Класс

class Dog{
    constructor(name){
        this.n = name;
        console.log(name + ': Я запустился');
    }

    guf(){
        console.log(this.n + ': Айлалалай');
    }
}

let s2 = new Dog('Шарик');

// s1.guf();
s2.guf();

//

s2.guf = function(){
    console.log('Мяу');
}

s2.guf();

s2.guf = 'qwerty';

// s2.guf();
console.log(s2.guf);