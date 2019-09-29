//Объявление массива
//Литеральное объявление. Пустой массив
let arr = [];

//Литеральное объявление. Инициализация значениями
let arr2 = [0, 1];

//Объявление через объект - НЕ РЕКОМЕНДУЕМОЕ
let arr3 = new Array(16);

// console.log(arr);
// console.log(arr2);
// console.log(arr2.length);
console.log(arr3);

for(let i = 2; i < 33; i++){
    arr2[i] = arr2[i - 2] + arr2[i - 1];
}

//Получение элемента массива
//         имя_массива[номер_элемента]
arr2[4]

//Изменение элемента массива(внесение в него нового значения)
//         имя_массива[номер_элемента] = новое_значение

arr2[4] = 123;

// Занесение в конец массива
arr.push("Кролик");

//Занесение в начало массива
arr.unshift("Скумбрия");

//Взятие из конца массива
let lastEl = arr.pop();
console.log(lastEl);

// Взятие из начала массива
console.log(arr.shift());

console.log(arr);

let arr4 = ["Титаник"];

arr4[4] = 'Карпатиан';
arr4[34] = 'Британик';
// arr4["Вова"] = 'Олимпик';
console.log(arr4);

let arr4Len = arr4.length;

for(let j = 0; j < arr4Len; j++){
    console.log(j + ": " + arr4[j]);
}