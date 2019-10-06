const parent = document.querySelector('.in');

function addElement(name = 'div', text = 'Текст по умолчанию'){
    parent.innerHTML += `<${name}>${text}</${name}>`;
}