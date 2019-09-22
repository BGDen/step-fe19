export class Paper{
    constructor(text = ''){
        this.text = text;
    }
    write(txt){
        this.text += `\n${txt}`;
    }
    read(){
        return this.text;
    }
}