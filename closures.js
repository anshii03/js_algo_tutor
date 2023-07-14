// function x() {
//   var a = 7;

//   function y() {
//     console.log(a); // 7
//   }

//   y();
// }

// x();

// inner function has access to variables of outer function

function x() {
  var a = 7;

  function y() {
    console.log(a); // 7
  }

  return y;
}

var z = x();
z();
