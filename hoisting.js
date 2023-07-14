var x = 1;
a();
b();
console.log(x); //1

function a() {
  var x = 10;
  console.log(x); // 10
}

function b() {
  var x = 100;
  console.log(x); // 100
}

// 10 100 1

// let y = 10;
// console.log(y);
// const x = 10;

// getName();
// console.log(x);

// // Function declaration
// function getName() {
//   console.log("javascript");
// }

//getName();
//console.log(getName); // undefined

// Function expression
// var getName = function () {
//   // Functiom Expression
//   console.log("javascript");
// };

//getName();

// getName : undefined

console.log(x); // undefined

//abc();

x();

var x = function abc() {
  console.log("javascript");
};

xyz();

function xyz() {
  console.log("function declaration");
}
