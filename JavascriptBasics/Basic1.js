console.log("Hello World")
console.log({sanket:1234})
let obj = {
    sanket:1234
}

//typeof 
console.log(typeof(obj));
console.log(typeof(-0))
console.log(typeof undefined)
console.log(typeof typeof 12)
c
//printing in same line in js
process.stdout.write("Hello");
process.stdout.write("world");

//floor value
console.log(Math.floor(5/2));
console.log(parseInt(5/2));
console.log(5/2);


//Short circuiting
// if first value is false , it will return the second value
console.log(NaN || 1)

// -ve is also truthy
console.log(-4 || 0)
// if first value is positive , than it will just return it
console.log(4 || 45)

console.log(0 && 78);
console.log(-1 && 56)

// -0 is also false
console.log(-0 == false)