let num = 0,
    pow = 0,
    txt = "answer: ",
    numT = 0;

num = parseInt(prompt("Enter a number"));// ' -- "
pow = parseInt(prompt('Enter a power'));

if(	 isNaN(num) || 
	 isNaN(pow) || 
	 num < 2    || 
	 pow < 2    || 
	 num > 100  || 
	 pow > 100    ){
	txt = "data is invalid";
}else{
	txt += num + "\n"; // add operator +
	numT = num;
	for(let i = 2; i <= pow; i++){// < -- <=
		numT *= num;
		txt += "\tin " + i + " = " + numT + ",\n"; // = -- +=
	}
}
console.log(txt);