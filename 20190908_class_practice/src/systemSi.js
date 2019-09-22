class Si{
    constructor(){
        this.lg = [];
    }

    km2ml(km){ 
        const answ = km / 1.609344;
        this.addLog(`${km} км в милях --> `, answ);
        return answ;
    }

    ml2km(ml){ 
        this.addLog(`${ml} миль в км --> `, ml * 1.609344);
        return ml * 1.609344;
    }
    
    lb2kg(lb){ return this.addLog(`${lb} фунтов в кг --> `, lb * 0.453592);}
    
    kg2lb(kg){ return kg / 0.453592;}
    
    yd2m(yd){ return yd * 0.9144;}
    
    m2yd(m){ return m / 0.9144;}

    //Вывести массив действий
    log(){
        return this.lg;
    }

    //Добавить данные в массив действий
    addLog(info, data){
        this.lg.push([info, data]);

        return data;
    }
}