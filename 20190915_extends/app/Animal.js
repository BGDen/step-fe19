class Animal{
  constructor(name = 'noname', age = 0, weight = 0){
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  info(){
    return `${this.name} is ${this.age} old and weight = ${this.weight} kg`;
  }
}

const name = 'Тот кого нельзя называть';

export {Animal, name};