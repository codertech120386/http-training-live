const fs = require("fs");
const path = require("path");

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile(path.join(__dirname, "app.js"), callback);
  console.log("abcd");
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
  console.log("callback");
});
