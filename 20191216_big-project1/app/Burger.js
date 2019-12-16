export class Burger{
    constructor(burgerName = 'Бургер'){
        this.burger = {
            name : burgerName,
            cucumber : 0,
            cheese : [],
            childs : []
        };

    }

    addCucumber(count = 1){
        this.burger.cucumber += count;
    }

    addCheese(cheeseName = 'Голландский'){
        this.burger.cheese.push(cheeseName);
    }

    setname(name = 'Бургер'){
        this.burger.name = name;
    }

    addBurger(burger = { name : 'Бургер'}){
        this.burger.childs.push(burger);
    }

    print(){
        return `${this.burger.name}: 
                ${this.burger.cucumber > 0? '\nCucumbers: ' + this.burger.cucumber: ''}
                ${this.burger.cheese.length > 0? '\nCheese: ' + this.burger.cheese.join(', '): ''}
                ${this.burger.childs.length > 0? '\nInside Burgers : ' + this.burger.childs.length: ''}`;
    }
}