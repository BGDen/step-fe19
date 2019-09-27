// [...document.querySelectorAll('button')]
//     .forEach(btn=> btn.addEventListener('click', showNums));

const inp = document.querySelector('.in');
const btns = document.querySelectorAll('button');
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', showNums);
}


function showNums(e){
    console.log(e.target.innerText);
    inp.value += e.target.innerText;
}