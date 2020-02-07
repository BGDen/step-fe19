function n(text = 'standart'){
    x('.main').innerHTML = text;
}

function x(selector){
    return document.querySelector(selector);
}

function j(text = 'jQuery'){
    $('.main').html(text);
}

function getW(){
    $.ajax({
        url: "/data.txt",
        data: {
          zipcode: 49000
        },
        success: function( result ) {
          $( "#weather-temp" ).html( `<strong>${result}</strong> degrees. jj`);
        }
      });
}

function getW2(){
    fetch('/data.txt')
        .then(req => req.text())
        .then(data => x('#weather-temp').innerHTML = `<strong>${data}</strong> degrees`);
}

function init(){
    $('.main').text('Init info');
    
}

$(init);

// document.addEventListener('DOMContentLoaded', init);


const divs = $('div');
console.log(divs);

setInterval(()=>{
    document.body.innerHTML += '<div>new</div>';
    $('div').slideToggle(3000);
    setDivText();
}, 3000);

function setDivText(){
    divs.text(`upd: ${Date.now()}`);
}