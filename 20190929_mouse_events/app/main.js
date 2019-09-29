const circle = {
    isDown : false,
    div : null,
    colorMove : 'pink',
    colorStay : 'black'
};

function mouseD(ev){
    circle.div = ev.target;
    circle.isDown = true;
    circle.div.style.backgroundColor = circle.colorMove;
    console.dir(circle.div);
}

document.querySelectorAll('.circle')
    .forEach(circ => circ.addEventListener('mousedown', mouseD));

document.body.addEventListener('mouseup', () => {
    circle.isDown = false;
    circle.div.style.backgroundColor = circle.colorStay;
    circle.div = null;
});

document.body.addEventListener('mousemove', (ev)=>{
    if(circle.isDown){
        circle.div.style.top = ev.clientY - 50 + 'px';
        circle.div.style.left = ev.clientX - 50 + 'px';
    }
});