import {RedBaloon} from './RedBaloon.js';

const domElements = {
    input : document.querySelector('#in__num'),
    ballons : []
};

document.querySelector('.form').addEventListener('submit', function(ev){
    // ev.preventDefault();
    let count = domElements.input.value;
    while(count--){
        domElements.ballons.push(new RedBaloon());
    }
});

// console.log(rb.constructor.name);