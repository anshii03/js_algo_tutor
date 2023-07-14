// function doStep1(init) {
//   return init + 1;
// }

// function doStep2(init) {
//   return init + 2;
// }

// function doStep3(init) {
//   return init + 3;
// }

// function doOperation() {
//   // synchronous code
//   let result = 0;
//   result = doStep1(result); // 1
//   result = doStep2(result); // 3
//   result = doStep3(result); // 6
//   console.log(`result: ${result}`); // 6
// }

// doOperation();

function doStep1(init, callback) {
  const result = init + 1; //1
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
