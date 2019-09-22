const maxWH = 20;

let w = 1,
    h = 1,
    s = "*",
    answ = "";

w = parseInt(prompt("Введите ширину Фигуры(1~20)"));
h = parseInt(prompt("Введите высоту Фигуры(1~20)"));
s = prompt("Введите символ Фигуры");

// if(isNaN(w)){
//     w = 1;
// }
w = (isNaN(w) || w < 1)? 1: w;
w = (w > maxWH)? maxWH: w;

h = (isNaN(h) || h < 1)? 1: h;
h = (h > maxWH)? maxWH: h;

for(let i = 0; i < h; i++){

    for(let j = 0; j < w; j++){
        answ += s[0];
    }

    answ += "\n";
}

console.log(answ);
