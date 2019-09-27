// const lishki = document.querySelectorAll('li');

function randomFull(){
    // [...lishki].forEach((li, i)=>li.innerHTML = `${i + 1}: ${Math.random()}`);

    const len = lishki.length;
    for(let i = 0; i < len; i++){
        lishki[i].innerHTML = `${i + 1}: ${Math.random()}`;
    }
}

// randomFull();