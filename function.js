

function sayLoveYou() {

    console.log('ok done');
    console.log('ok done u mom ');
    
}
sayLoveYou();


function doublet(num){

    var result = num * 2;
    console.log(result); 
     
}
doublet(10);



function doublet(num){

    var result = num * 2;
    return result;
     
}

var first = doublet(10);
var second = doublet(100);
var total = first + second;

console.log(total);




function sum(num , num1){
    var result = num + num1;
    return result;
}

var add = sum( 25 , 55);
console.log(add);