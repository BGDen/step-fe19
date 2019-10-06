const el = {
    in : document.querySelector('.in'),
    inpTag : document.querySelector('.tagName'),
    inpText : document.querySelector('.text'),
    btnCreate : document.querySelector('.btnCreate'),
    btnClear : document.querySelector('.btnClear'),
    children : []
}

el.btnCreate.addEventListener('click', () => {
    const element = document.createElement(el.inpTag.value);
    element.innerText = el.inpText.value;
    el.inpTag.value = '';
    el.inpText.value = '';
    el.in.appendChild(element);
    el.children.push(element);
});

el.btnClear.addEventListener('click', () => {
    while(el.in.hasChildNodes()){
        el.in.removeChild(el.in.firstChild);
    }
});