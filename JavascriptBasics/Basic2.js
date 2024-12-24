//operators
//bitwise operators ( & , | , ^ , ~)
console.log(5 & 3)
console.log(8>>3)
console.log(~5)

//Sting concatenation
console.log("Hello"+ " World")

console.log(0-(-0));
console.log(0<<2)
console.log(1-"1")

console.log(NaN & 4)
console.log("5">>1)

//Switch Case 
let val ="10";
switch(val){
    case 10 : console.log("yes");
              break;
    default : console.log("No");          
}

//function
function fun(x){
    console.log(x+10);
    return x+10;
}

let x = fun(10);
console.log(fun(15));
console.log(x);

//you can store functions
let store= fun;
store(9);

let temp =console.log;
temp(12);