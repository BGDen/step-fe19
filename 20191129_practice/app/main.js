class myArray{
    constructor(...arr){
        this.arr = arr;
    }
    concat(...arrays){
        const answ = [...this.arr];
        arrays.forEach(a => answ.push(...a));
        return answ;
    }
    
    toString(){
        return `[${this.arr.join(',')}]`;
    }
    valueOf(){
        return this.arr;
    }
}

const arr = [1,2,3,4],
    a2 = [22,33,44];

const myArr = new myArray(1,1,2,2,3,3);
console.log(myArr.concat(a2));
console.log(`array: ${myArr}`);


// console.log(arr.concat(a2));
// console.log(arr);