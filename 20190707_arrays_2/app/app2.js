const arr = [10, 44, 99, 54, 34, 99, 100, 44, 34, 80],
    ish = [...arr];

let max = [],
    num = [];

arr.sort(function(a, b){
    return a - b;
});

for(let j = 0; j < 3; j++){
    max.push(arr.pop());
    num.push(ish.indexOf(max[j]));
}

console.log(ish);
console.log(arr);
console.log(max);
console.log(num);