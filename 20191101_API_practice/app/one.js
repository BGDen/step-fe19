function sendData(movie = 'dog'){
    fetch(`http://www.omdbapi.com/?apikey=b954bb68&s=${movie}&page=3`).then(answ => answ.json()).then(data => console.log(data));
}