const divs = [...document.querySelectorAll('div')];
const black = 'black';

document.querySelector('.clear').addEventListener('click', ()=>{
    divs.forEach(div=>{
        div.classList.remove(black);
    })
});

divs.forEach(div=>{
    div.addEventListener('click', e=>{
        e.target.classList.toggle(black);
    })
});