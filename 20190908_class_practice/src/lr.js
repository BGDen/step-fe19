class Chebura{
    constructor(className){
        this.div = document.querySelector(className);
        this.bRadius = 0;
        this.width = 100;
    }

    borderRadiusAdd(){
        this.bRadius < 50? this.bRadius++: 0;
        this.div.style.borderRadius = this.bRadius + "%";
    }

    widthMin(){
        this.width > 2? this.width--: false;
        this.div.style.width = this.width + "px";
    }
    //метод 1
    
    //метод 2
    
    //метод 3
    
    //метод 4


}


function init(){
    document.querySelector('.btn_width_min').addEventListener('click', widthMin);
    document.querySelector('.btn_width_add').addEventListener('click', widthAdd);
    document.querySelector('.btn_height_min').addEventListener('click', heigthMin);
    document.querySelector('.btn_height_add').addEventListener('click', heigthAdd);
    document.querySelector('.btn_border_add').addEventListener('click', borderAdd);
    document.querySelector('.btn_border_min').addEventListener('click', borderMin);
}

function widthAdd(){
    console.log('btn add w');
}

function widthMin(){
    ch.widthMin();
}

function heigthAdd(){
    console.log('btn add h');
}

function heigthMin(){
    console.log('btn min h');
}

function borderAdd(){
    ch.borderRadiusAdd();
}

function borderMin(){
    console.log('btn min h');
}

init();
const ch = new Chebura('.el');
