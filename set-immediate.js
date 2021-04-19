// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// setImmediate(() => {
//   console.log("immediate");
// });

const fs = require("fs");

console.log(__filename);

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});
