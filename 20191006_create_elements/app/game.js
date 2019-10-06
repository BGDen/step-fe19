/*
1) Раз в секунду появляются шарики диаметром от 50px до 100px вверху экрана, в случайном месте.
2) Каждый шарик случайного цвета из радуги.
3) Каждые полсекунды каждый шарик двигается вниз на расстояние от 5px до 20px
4) При клике на шарик, он удаляется и счет игрока увеличивается на 1 очко.
5) При касании нижней части экрана, шарик удаляется и счет игрока уменьшается на 5 очков.
*/

const balls = [];
const parent = document.querySelector('.game');

//Генератор шаров
function ballGenerator(){
    //каждую секунду создавать элемент Ball
    const gen = setInterval(()=>balls.push(new Ball()), 1000);
}

class Ball{
    constructor(){
        const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
        //создается элемент Шарик
        this.ball = document.createElement('div');
        //генерируется случайный диаметр от 50 до 100 пикселей
        const width = this.random(50, 101);
        this.ball.style.width = width + 'px';
        this.ball.style.height = width + 'px';
        //выбирается случайный цвет из 7 доступных
        this.ball.style.backgroundColor = colors[this.random(0, 7)];
        //генерируется шаг шарика от 5 до 20 пикселей и записывается в свойство "ШАГ"
        this.step = this.random(5, 21);
        //генерируется стартовое состояние left от 0 до края экрана
        this.ball.style.left = this.random(0, 100) + '%';
        //top свойство задается = 0
        this.top = 0;
        //на шарик вешается слушатель действия "Клик"
        this.ball.addEventListener('click', ()=> this.click());
        //шарик добавляется родительскому элементу
        parent.appendChild(this.ball);
        //создать интервал в 0.5 секунды и повесить обработчик метод "шаг"
        this.interval = setInterval(()=> this.step(), 500);
    }

    random(min = 1, max = 100){
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Метод "шаг"
    step(){
        //шарик двигается на расстояние "ШАГ"

        //проверяем, достигли ли мы границы экрана

            //если достигли, то запускаем метод "ПРОВТЫКАЛ"
    }

    //метод "КЛИК"
    click(){
        //добавить в счет пользователю 1 очко

        //удалить шарик(вызвать метод "СМЕРТЬ")
    }

    //метод "ПРОВТЫКАЛ"
    fail(){
        //отнять 5 очков из счета игрока

        //удалить шарик(вызвать метод "СМЕРТЬ")
    }

    //метод "СМЕРТЬ"
    death(){
        //удаляет шарик
    }
}

class Little{
    constructor(name){
        const el = document.createElement('div');
        parent.appendChild(el);
        el.addEventListener('click', ()=> this.alert());
        this.name = name;
    }

    alert(){
        console.log(this);
        console.log(`Hello, ${this.name}`);
    }
}

const l = new Little('Montana');