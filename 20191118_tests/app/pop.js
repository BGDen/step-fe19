function _pop(arr){
    if(arr.length == 0){
        return undefined;
    }
    const len = arr.length - 1;
    const answ = arr[len];
    const p = [];
    for(let i = 0; i < len; i++){
        p.push(arr[i]);
    }
    arr = p;
    return answ;
}

