let num = 0;

// do{
//     num = parseInt(prompt('Enter a YoB(f.e. 1965)'));


// }while(num < 1919 || num > 2018 || isNaN(num));


for(; num < 100; num++){
    if(num % 2 == 0){
        continue;
    }
    
    console.log(num);
    

    if(num > 23){
        break;
    }
}

