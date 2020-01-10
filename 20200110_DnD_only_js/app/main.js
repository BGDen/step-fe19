(()=>{
    document.querySelectorAll('.card').forEach(c => c.addEventListener('mousedown', startDrag));
    document.body.addEventListener('mousemove', moveMouse);
    document.body.addEventListener('mouseup', startDrop);
})();

const dnd = {
    obj : {},
    ismouseDown : false,
    cart : document.querySelector('.cart')
}

function startDrag(){
    dnd.obj = this;
    dnd.ismouseDown = true;
    console.dir(dnd.obj);
}

function moveMouse(ev){
    if(dnd.ismouseDown){
        dnd.obj.classList.add('move');
        dnd.obj.style.position = 'absolute';
        dnd.x = ev.pageX - dnd.obj.offsetWidth / 2;
        dnd.y = ev.pageY  - dnd.obj.offsetHeight / 2;
        dnd.obj.style.left = dnd.x + 'px';
        dnd.obj.style.top = dnd.y + 'px';
    }
}

function startDrop(ev){
    if(dnd.ismouseDown){
        if(ev.pageX >= dnd.cart.offsetLeft && 
            ev.pageY <= dnd.cart.offsetHeight){
                dnd.obj.style.position = 'static';
                dnd.cart.appendChild(dnd.obj);
                dnd.obj.classList.add('in-cart');
            }


        dnd.obj.classList.remove('move');
        dnd.ismouseDown = false;
        dnd.obj = {};
    }    
}