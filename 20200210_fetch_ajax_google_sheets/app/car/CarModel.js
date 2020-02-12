export class CarModel{
    constructor(){
        this.link = 'https://spreadsheets.google.com/feeds/list/1PkvsT-XVVJvq9Y5Yb0eAbJ76WiSWCdNKKw-Tchy3aUo/od6/public/values?alt=json';


    }

    loadData(){
        return fetch(this.link)
            .then(req=>req.json())
            .then(carData => this.prepareData(carData));
    }

    prepareData(carData){
        const arr = carData.feed.entry.map(el=>{
            const obj = {};
            el.content.$t.split(', ').forEach(el=>{
                const d = el.split(': ');
                obj[d[0]] = d[1];
            });
            return obj;
        });

        this.data = arr;
        
        return arr;
    }

    getSearchedData(sValue){
        const regS = new RegExp(sValue, 'i');
        return this.data.filter(el => regS.test(el.name));
    }
}