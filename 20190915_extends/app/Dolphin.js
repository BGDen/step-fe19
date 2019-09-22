import {Animal} from '/app/Animal.js';

export class Dolphin extends Animal{
  constructor(name = 'Flipper', weight = 100) {
    super(name, 0, weight);
    // this.name = name;
    // this.weight = weight;
    delete this.age;   0
  }

  focus(fName = 'Название фокуса'){
    console.log(`${fName} - Фокус!!!`);
  }
}

export const aaa = 'ggg';