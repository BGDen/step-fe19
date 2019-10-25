function checkInputs(classname, regE){
    document.querySelector(classname).addEventListener('input', e=>{
        const names = {
            valid : 'valid',
            invalid : 'invalid'
        };
        e.target.classList.remove(names.valid, names.invalid);
        e.target.classList.add( 
            regE.test(e.target.value)? names.valid: names.invalid);
    });
}

checkInputs('.inFIO', /^[а-я]{2,20}\s[а-я]{2,20}\s?[а-я]{2,20}$/i);

checkInputs('.inEmail', /^[a-z0-9]{2,15}@[a-z0-9]{2,15}\.[a-z]{2,15}$/i);