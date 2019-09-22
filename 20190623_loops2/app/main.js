//Вводит число 
/*
4568
Нужно вывести сумму всех цифр в этом числе
4+5+6+8 = 23
*/


//Базовая инициализация переменных
let num = 0,
    s = 0,
    lD = 0,
    num2 = 0;

num = parseInt(prompt("Введите число от 10 до 1000000", 123));
// num = (isNaN(num))? 1000: num;
if(isNaN(num)){
    num = 1000;
}


num2 = num;

while(num2 > 0){
    lD = num2 % 10;
    s += lD;
    num2 = parseInt(num2 / 10);
}

alert("Сумма цифр числа " + num + " = " + s);