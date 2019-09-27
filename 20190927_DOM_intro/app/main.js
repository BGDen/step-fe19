let counter = 0;
const circle = document.querySelector('.circle');
let size = 14;
const colors = ['black', 'red', 'green', 'blue'];
let color  = 0;

circle.addEventListener('click', count);
circle.addEventListener('mousedown', info);
document.body.addEventListener('wheel', resize);

function count(){
  circle.innerText = ++counter;
}

function info(ev){
  console.log(ev);
}

function resize(ev){
  if(ev.altKey){
    color = (color + 1) % colors.length;
    document.body.style.color = colors[color];
  }else{
    size += (ev.deltaY > 0)? 2: -2;
    document.body.style.fontSize = size + 'pt';
  }
  
}

