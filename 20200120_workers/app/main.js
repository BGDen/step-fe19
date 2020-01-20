let counter = 0;

document.querySelector('.btn-changeColor').addEventListener('click', ()=>{
    document.body.style.backgroundColor = ['violete', 'blue', 'orange', 'yellow', 'red'][Math.floor(Math.random() * 5)];
    //                                    массив                                         [индекс]
});
document.querySelector('.btn-counter').addEventListener('click', ()=>{
    console.log(++counter);
});
document.querySelector('.btn-generate').addEventListener('click', ()=>{
    const worker = new Worker('/app/generator.js');
    worker.postMessage(100000);
    worker.onmessage = function(work){
        console.log('Data from worker:', work.data);
        console.log(work.timeStamp);
    }
});