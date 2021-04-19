// console.log("start");

// // this function is ready to be executed after 10 seconds
// setTimeout(() => {
//   console.log(" 10 seconds timer");
// }, 10000); // 10 seconds

// // this function is ready to be executed after 5 seconds
// setTimeout(() => {
//   console.log(" 5 seconds timer");
// }, 5000); // 5 seconds

// console.log("end");

const fs = require("fs");

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile("/path/to/file", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
