function getNum(min = 0, max = 1000000){
    let nn = 'начальное значение';
    while(isNaN(nn) || nn > max || nn < min){
        nn = parseInt(prompt(`Введите число от ${min} до ${max}`, 0)); //динамические строки
    }
    return nn;
}


function main(){
    let start = getNum(1, 100),
        finish = getNum(start + 1, 100),
        min = 100,
        nn = 88;

    for(let i = start; i <= finish; i++){
        console.log(i);
    }
}



main();