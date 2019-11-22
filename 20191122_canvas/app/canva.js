const canva = document.querySelector('.canva')
    inColor = document.querySelector('.in_color'),
    coors = {};

[...document.querySelectorAll('input[type="number"]')].forEach(el=>{
    coors[el.className] = el;
});

canva.addEventListener('mousemove', ev => {
    // console.log(ev);
});

document.querySelector('.btn_draw').addEventListener('click', ()=>{
    const dr = canva.getContext('2d');
    dr.fillStyle = inColor.value;
    dr.fillRect(coors.in_x1.value, 
                coors.in_y1.value, 
                coors.in_x2.value,
                coors.in_y2.value);
});