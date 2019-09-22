const s = new Si();

console.log(s.km2ml(100));
console.log(s.ml2km(100));
console.log(`100 фунтов в кг ${s.lb2kg(100)}`);
console.log(`100 кг в фунтах ${s.kg2lb(100)}`);
console.log(`100 ярдов в метрах ${s.yd2m(100)}`);
console.log(`100 метров в ярдах ${s.m2yd(100)}`);
console.log(s.log());

const cat = new Cat(),
    cat2 = new Cat();
cat.addName('Мурка');
cat2.addName('Пушистик');

function murchat(){
    console.log(`Неизвестный кот: Мур-мур-мур. Хочу Мурку`);
}