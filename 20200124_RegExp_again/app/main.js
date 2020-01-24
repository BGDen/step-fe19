// 'use strict';
import { anekdots } from "./anekdots.js";

const info = document.querySelector('.info');
function log(what, isDone){
    info.innerHTML = `<p>Проверка на ${what}: ${isDone}</p>${info.innerHTML}`;
    console.log(what, isDone);
}

//Литеральный
let reg0 = /ху/;

//ОБъектный
let reg1 = new RegExp('опа');

//test - regular expressions method, which return boolean value
log('ху', reg0.test(anekdots));
log('опа', reg1.test(anekdots));

//Наборы символов [sdfkljasdlfkjasdlk]
let regOpa = /[ЖПжп]оп/;
log('[ЖПжп]оп', regOpa.test(anekdots));
let regNum = /[0123456789]/;
log('[0123456789]', regNum.test(anekdots));

//exec - выполнение регулярного выражения
log('[0123456789]', regNum.exec(anekdots));
log('[ЖПжп]оп', regOpa.exec(anekdots));

//Сокращения
let regNum2 = /[0-9]/;
log('[0-9]', regNum2.exec(anekdots));
let regLetter = /[а-яА-Я]\?/;
log(regLetter, regLetter.exec(anekdots));
let regLetter2 = /[a-zA-Z]/;
log(regLetter2, regLetter2.exec(anekdots));
//a-zA-Z0-9 --> \w - цифробуквенный символ - word
let regLetter3 = /[\w][\w]\./;
log(regLetter3, regLetter3.exec(anekdots));
//0-9 - \d цифра - digit
let regNum3 = /[\d]/;
log(regNum3, regNum3.exec(anekdots));
//пробел - \s - space
let regSpace = new RegExp('\s[\d]\s');
log(regSpace, regSpace.exec(anekdots));

//ОТрицательные сокращения
//Не цифробуквенный символ   - \W
let regNoWord = /[\W]/;
log(regNoWord, regNoWord.exec(anekdots));

//Не цифра  - \D 
let regNoNum = /\(\D\)/;
log(regNoNum, regNoNum.exec(anekdots));

//Не пробельный символ - \S
let regNoSpace = /\S\)/;
log(regNoSpace, regNoSpace.exec(anekdots));

//Отрицания в наборах ^ 
//^ используется в наборах как отрицание элементов набора [^аоу] - не а, не о, не у
//^ используется в начале регулярного выражения как обозначение привязки к началу строки(позиционирование) - /^\d\s/ - Строка начинается с цифры, после которой идет пробел
let regNo = /[^пП][^о]дел/;
log(regNo, regNo.exec(anekdots));

//Повторение - Квантификаторы
/**
 * 1) Четкое количество - 
 *      \d{3} - четко 3 цифры
 * 2) Диапазонный - 
 *      [а-яА-Я]{2,4} - от 2 до 4
 * 3) Минимум
 *      \w{3,}
 * 4) Максимум
 *      \.{,5}
 * 5) + -  один или более (хоть один) {1,}    \d+
 * 6) * - ноль или более (плевать сколько) {0,}
 * 7) ? - может быть, может не быть {0,1}   [а-яА-Я]{1,}\'?[а-яА-Я]{1,}   [а-яА-Я\']{1,}
 */
let regIfNums = /\d+/;
log(regIfNums, regIfNums.exec(anekdots));

//Группировка
let fio = `My name is Ivan Petrov. I am glad to see you, guys.`;
let regGr = /([A-Z][\w]+)\s([A-Z][\w]+)/;
log(regGr, fio.replace(regGr, '$2 $1'));




