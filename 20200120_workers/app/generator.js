onmessage = function generateNms(ev){
    console.log(ev);
    console.log('start: ', ev.data);
    const arr = [];
    console.time('randoms');
    for(let i = 0; i < ev.data; i++){
        const n = Math.floor(Math.random() * ev.data * 10);
        if(!arr.includes(n)){
            arr.push(n);
        }else{
            i--;
            continue;
        }
       
    }    
    console.timeEnd('randoms');
    postMessage(arr);
}