import {Paper} from '/app/Paper.js';
import {Notebook} from '/app/Notebook.js';

const p = new Paper('Записная книжка');
const n = new Notebook('Death Note', 'Денис, Ярослав, Виктор, Николай');

// console.log(p.read());

p.write('Hello');
n.write('Евгений');
// console.log(p.read());

console.log(n.calcWords());