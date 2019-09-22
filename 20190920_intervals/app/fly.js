const fly = document.querySelector('.fly');
let x = 0;
let y = 0;
const diap = 500;

function flyMyFly(){
    const rx = Math.floor(Math.random() * 50) - 25;
    const ry = Math.floor(Math.random() * 50) - 25;

    x = x < 0? 0: x + rx;
    y = y < 0? 0: y + ry;
    fly.style.top = y + 'px';
    fly.style.left = x + 'px';
    
    document.title = `${x}:${y}`;
}

fly.addEventListener('click', ()=>{
    clearInterval(fl);
    alert('Fly DIE!!!');
})

const fl = setInterval(flyMyFly, 10);

function gg(css){
    return document.querySelector(css);
}

gg('.el').innerHTML = 44;
