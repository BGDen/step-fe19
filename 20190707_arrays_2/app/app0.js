let r = [0, -1, 0, -1, 0, -1],
    arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = parseInt(prompt("Введите число от 1 до 100, пожалуйста."));
    if(arr[i] < 1 || arr[i] > 100 || isNaN(arr[i])){
        console.log("Ошибка в веденных данных");
        break;
    }

    if(arr[i] > r[0]){
        r[4] = r[2];
        r[5] = r[3];
        r[2] = r[0];
        r[3] = r[1];

        r[0] = arr[i];
        r[1] = i;

        continue;
    }

    if(arr[i] > r[2]){
        r[4] = r[2];
        r[5] = r[3];

        r[2] = arr[i];
        r[3] = i;

        continue;
    }

    if(arr[i] > r[4]){
        r[4] = arr[i];
        r[5] = i;
    }   
}

console.log(arr);
console.log(r);

