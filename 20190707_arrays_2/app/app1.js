const arr = [10, 44, 3, 54, 34, 99, 100, 44, 34, 80];

let max = [],
    num = [],
    m = 0, 
    n = -1;

for(let j = 0; j < 3; j++){
    m = 0;
    n = -1;    
    for(let i = 0; i < 10; i++){
        if(arr[i] > m){
            m = arr[i];
            n = i;
        }
    }
    
    max.push(m);
    num.push(n);

    arr[n] = 0;
}

console.log(max);
console.log(num);


