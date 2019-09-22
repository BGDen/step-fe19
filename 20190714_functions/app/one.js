//FUNCTION DECLARATION

//function -- ключевое слово объявления функции
//showText -- имя функции
//text -- аргумент, переменная для работы внутри функции
//text = "Текст по умолчанию" -- возможность задавать значение переменных по умолчанию
//return -- конструкция конца функции и возврата значения в то место, откуда функция была вызвана

showText('declaration');

function showText(text = "Текст по умолчанию" /*аргументы через запятую*/){
    //тело функции
    console.log(text);

    return true;
}


showAlert('expression');


//FUNCTION EXPRESSION
if(4 > 10){
    var showAlert = function(tt){
        alert(tt + 1);
    }
}else{
    var showAlert = function(text = "Текст по умолчанию"){
        
        alert(text);
        return true;
    }
}



//LIKE OBJECT
let showBB = new Function();