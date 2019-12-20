import {BurBuilder} from './BurBuilder.js'

console.log(new BurBuilder().createBurger('Биг Мак').withCheese('Филадельфия').withCheese().withCucumber(3).result.print());