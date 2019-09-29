const links = {
    input : q('.in'),
    h3 : q('.h3'),
    btn : q('.add'),
    btn2 : q('.gen'),
    sec : q('.forD')
}

function q(css){
    return document.querySelector(css);
}

links.btn.addEventListener('click', ()=>{
    links.h3.innerHTML = links.input.value;
    links.input.value = '';
});

links.btn2.addEventListener('click', ()=>{
    let count = parseInt(links.input.value);
    let str = '';
    while(count--){
        str += '<div class="d"></div>';
    }

    links.sec.innerHTML = str;
});