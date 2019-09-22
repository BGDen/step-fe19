import {Animal} from '/app/Animal.js';
import {Dolphin, aaa as gopLauphing} from '/app/Dolphin.js';

const jiraph = new Animal('Жираф', 3, 200);
const dolph = new Dolphin();

console.log(jiraph);
console.log(jiraph.info());
console.log(dolph);
console.log(dolph.info());

dolph.focus();
// jiraph.focus();
console.log(gopLauphing);