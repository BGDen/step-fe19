let isDraw = false,
    count = 0;

const countView = document.querySelector('.count');

document.body.addEventListener('mousedown', ()=>{isDraw = true;});
document.body.addEventListener('mouseup', ()=>{isDraw = false;});

document.body.addEventListener('mousemove', ev=>{
    if(isDraw){
        console.log(ev);
        //Создать DIV элемент
        const el = document.createElement('div');
        //Настроить стили 
        el.classList.add('dot');
        //Спозиционировать его
        el.style.top = `${ev.clientY}px`;
        el.style.left = `${ev.clientX}px`;
        //Перенести в Body
        document.body.appendChild(el);
        countView.innerText = ++count;
    }    
});

