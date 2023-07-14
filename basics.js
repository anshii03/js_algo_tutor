//console.log("befor initialising", a); // undefined
console.log(b); // undefined

//console.log(c);
let a = 10; // more stricter than var

a = 40;

const c = 200;

var b = 20;

x = 19; // memory is also allocated to these variables

console.log("window object", window.b);

console.log(a); // 10
console.log(b); // 20

square(10);

function square(num) {
  return num * num;
}

console.log(square1); //undefined
console.log(square2); // undefined

var square1 = square(a);
var square2 = square(b);

console.log(square1); // 100
console.log(square2); // 400
