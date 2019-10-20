function getCities(){
    //Создать объект AJAX
    const ajax = new XMLHttpRequest();
    //Настроить получение данных(поведение во время работы)
    ajax.addEventListener( 'readystatechange', function(){
        // console.log(this.status, this.readyState);
        if(this.status == 200 && this.readyState == 4){
            parseCities(JSON.parse(this.responseText));
        }
    });
    //Куда отправить запрос и как
    ajax.open('get', 'data/cities.json', true);
    //Оправить запрос
    ajax.send();
}

function parseCities(arr){
    const find = inpS.value.toLowerCase();
    const answ = arr.filter( city => city.toLowerCase().includes(find));
    // const answ = arr.filter( (city) => {
    //     return city.includes(inpS.value);
    // });
    renderList(answ);
}

function renderList(arr){
    answ.innerHTML = arr.map(city => `<p>${city}</p>`).join(' ');
}
const inpS = document.querySelector('.search input');
const answ = document.querySelector('.answer');

inpS.addEventListener('input', getCities);


