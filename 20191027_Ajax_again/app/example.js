function get(){
    // const api = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    const api = 'http://so2niko.zzz.com.ua/examples/chat/api.php';
    const aja = new XMLHttpRequest();
    aja.addEventListener('readystatechange', function(){
        if(this.status == 200 && this.readyState == 4){
            dom.info.innerHTML = this.responseText;
        }
    });

    aja.open('get', api, true);
    aja.send();
}

const dom = {};

document.addEventListener('DOMContentLoaded', ()=>{
    dom.info = document.querySelector('.info');
    dom.btnGet = document.querySelector('.btn_get');
    dom.btnGet.addEventListener('click', get);
});

