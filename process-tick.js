// let bar;

// // this has an asynchronous signature, but calls callback synchronously
// function someAsyncApiCall(callback) {
//   // process.nextTick(callback);
//   callback();
// }

// // the callback is called before `someAsyncApiCall` completes.
// someAsyncApiCall(() => {
//   // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
//   console.log("bar", bar); // undefined
// });

// bar = 1;

// const EventEmitter = require("events");
// const util = require("util");

// function MyEmitter() {
//   // EventEmitter.call(this);
//   process.nextTick(() => {
//     this.emit("event");
//   });
// }
// util.inherits(MyEmitter, EventEmitter);

// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("an event occurred!");
// });

const util = require("util");

function Person() {
  this.firstName = "Dhaval";
  this.lastName = "Chheda";
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstName} ${this.lastName}`);
};

Person.prototype.mothersName = "Abc";

function Student() {
  Person.call(this);
  this.firstName = "Harsh";
  this.roleNumber = 5;
}

util.inherits(Student, Person);
student = new Student();
student.greet();

console.log(student.__proto__.__proto__);
