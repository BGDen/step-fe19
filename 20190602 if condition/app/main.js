//Условия

let age = 53,
    msg = "no message";
const minAge = 18;

// gg = '4';
// hh = '5';

// console.log(gg);
// console.log(hh);


// var gg = 'Hello, I am a GG';
// let hh = 'Hello, I am a HH';

if(age >= minAge){
    console.log('Проходите');
}else{
    console.log('Доступ запрещен. Подрастите');
}


if(age > 60){
    console.log('Мы позвоним вашим детям');
}

switch(age){
    case 7:{
        msg = 'Пора в школу, первоклассник';
        break;
    }
    case 17:{
        msg = "Пора в ВУЗ, первокурсник";
        break;
    }
    case 18:{
        msg = 'Пора в армию, лентяй-призывник';
        break;
    }
    case 23:
    case 33:
    case 53:
    case 43:{
        msg = 'Пора делать вино из воды';
        break;
    }
    case 90:{
        msg = 'Уже поздно, дедушка. Пора в круиз!';
        break;
    }
    default:{
        msg = 'Вы нам не подходите';
    }
}


console.log(msg);

switch(true){
    case age < 20:{
        console.log('Вам меньше 20');
        break;
    }
    case age == 20:{
        console.log('Вам 20');
        break;
    }
}

let size = 'дельфин№43';
//Явное приведение типов данных

//Преобразование в целое число
// size = Number.parseInt(size);
size = Number.parseFloat(size);
console.log(size);

switch(size){
    case 43:{
        console.log('Вы наш победитель!');
        break;
    }
    case 44:{
        console.log('Ну, такое');
        break;
    }
    default:{
        console.log('Сегодня не ваш день');
    }
}

