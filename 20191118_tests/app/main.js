function sum(...arr){
    arr = arr.filter( el => !isNaN(Number(el)));
    return arr.length > 0? arr.reduce((ac, el) => Number(ac) + Number(el)): 0;
}