document.addEventListener('DOMContentLoaded',()=>{
    addCars();
    addListeners();
});

const temp = {
    dragElement : false
};

function addCars(count = 10){
    const carsContainer = document.querySelector('.autos');
    const tesla = 'https://c7.hotpng.com/preview/711/596/955/tesla-model-s-tesla-motors-car-tesla-model-x-tesla-png-transparent-picture.jpg';
    while(count--){
        const car = document.createElement('div');
        car.classList.add('auto', `car${count}`);
        car.setAttribute('draggable', true);
        car.addEventListener('dragstart', dragStart);
        carsContainer.appendChild(car);

        if(Math.random() > 0.8){
            car.style.backgroundImage = `url(${tesla})`;
            car.classList.add('tesla');
        }
    }
}

function dragStart(ev){
    ev.dataTransfer.setData('element', '.' + ev.target.className.replace(/\s/g, '.'));
    // console.log(temp.dragElement);
}

function addListeners(){
    const parks = [...document.querySelectorAll('.park')];
    parks.forEach(park=>{
        park.addEventListener('drop', drop);
        park.addEventListener('dragover', dragOver);
    })
}

function dragOver(ev){
    ev.preventDefault();
}

function drop(ev){
    const car = document.querySelector(ev.dataTransfer.getData('element'));

    if( ev.target.classList.contains('luxury') && 
        !(car.classList.contains('tesla'))){
        return '';
    }
 
    ev.preventDefault();    
    ev.target.appendChild(car);
 
}