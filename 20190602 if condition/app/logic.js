let a = 33,
    b = '0',
    c = null,
    d = undefined;

if(d){
    console.log('Это правда');
}else{
    console.log('Это ложь');
}

//Преобразование строки в число

//Явное преобразование

let ch1 = prompt('Введите число');

// ch1 = Number.parseFloat(ch1);

//неявное преобразование

// ch1 = +ch1;

// ch1 = 1 * ch1;

// ch1 = ch1 - 0;

ch1 = ch1 / 1;

console.log(ch1, typeof ch1);