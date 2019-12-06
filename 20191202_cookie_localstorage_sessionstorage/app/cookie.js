class Cookie{
    static getCoo(cname){
        const name = cname + "=";
        const ca = decodeURIComponent(document.cookie).split(';').map(el => el.trim());
        let answ = '';
        ca.every(coo => {
            if (c.indexOf(name) == 0) {
                answ = c.substring(name.length, c.length);
                return false;
            }
            return true;
        });
        return answ;
    }

    static setCoo(cname, cvalue, exdays = 0) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=/`;
    }

    static delCoo(cname){
        document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}
