const days = ['Mn', 'Tu', 'We', 'Th', 'Fr', 'Su', 'St'];
// let pn = days[0];
// let sr = days[2];
// let pt = days[4];

let [pn, , sr, , pt] = days;
console.log(pn, sr, pt);
console.log(days);

const menu = {
    burger: 'Big Mack',
    drink : 'Coca-Cola',
    meal : 'potato fries',
    souse : 'Cheese',
    price : 111
};

let { burger, souse} = menu;
console.log(burger, souse);

function showPrice({burger, price}){
    price = price / 24.4;
    console.log(`${burger} menu is $${price.toFixed(2)}`);
}

showPrice(menu);
console.log(menu);