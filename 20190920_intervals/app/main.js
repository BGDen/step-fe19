let a = 0;

function show(){
    console.log(++a);
    // setInterval(show, 1000);
    if(a >= 10){
        // setTimeout(show, 1000);
        clearInterval(inn);
    }
   
    return 'Hell!';

}

// setTimeout(show, 5000);
// const inn = setInterval(show, 1000);

// console.log(show());


const elements = document.querySelectorAll('.el');
const elLen = elements.length;
const lefts = '0'.repeat(elLen).split('');

function gonka(){
    const r = Math.floor(Math.random() * elLen);
    lefts[r] = 30 + 1 * lefts[r];
    elements[r].style.left = lefts[r] + 'px';
    elements[r].innerHTML = r + 1;
}

setInterval(gonka, 100);