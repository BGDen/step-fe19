document.addEventListener('DOMContentLoaded', ()=>init());

const mem = {};

function init(){
    mem.memo = document.querySelector('.memo div');
    mem.audio = document.querySelector('.audio');
    mem.audio.loop = true;
    mem.isPlay = false;
    mem.color = '';
    document.querySelector('table').addEventListener('click', changeColor);
    document.body.addEventListener('keydown', moveTank);
    mem.tank = {
        top: 0,
        left : 0,
        link : document.querySelector('.tank'),
        step : 10
    };
}

function changeColor(ev){
    if(ev.target.tagName == 'TD'){
        if(mem.color == ''){//Забираем цвет
            if(ev.target.classList.length == 0){
                mem.color = 'white';
            }else{
                mem.color = ev.target.classList[0];
            }       
        }else{//Устанавливаем цвет
            ev.target.className = mem.color;
            mem.color = '';
        }
        mem.memo.className = mem.color;     
    }
}

function moveTank(ev){
    console.log(ev);
    mem.isPlay = true;
    switch(ev.keyCode){
        case 87:{//w
            mem.tank.top -= mem.tank.step;
            mem.tank.link.style.transform = 'rotate(0deg)';
            mem.tank.link.style.top = mem.tank.top + 'px';       
            break;
        }
        case 83:{//s
            mem.tank.top += mem.tank.step;
            mem.tank.link.style.top = mem.tank.top + 'px';
            mem.tank.link.style.transform = 'rotate(180deg)';
            break;
        }
        case 65:{//a
            mem.tank.left -= mem.tank.step;
            mem.tank.link.style.transform = 'rotate(270deg)';
            mem.tank.link.style.left = mem.tank.left + 'px';
            break;
        }
        case 68:{//d
            mem.tank.left += mem.tank.step;
            mem.tank.link.style.transform = 'rotate(90deg)';
            mem.tank.link.style.left = mem.tank.left + 'px';
            break;
        }
        default:{
            mem.isPlay = false;
        }
    }

    playSound();
}

function playSound(){
    if(mem.isPlay){
        mem.audio.play();
    }else{
        mem.audio.pause();
    }
}