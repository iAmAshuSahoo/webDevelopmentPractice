var assert = require("assert");
describe("Array", function () {
  describe("#indexOf", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assertChai = require("chai").assert;
var appDemo = require("../src/demo").helloFunc;
var appDemo1 = require("../src/demo");

// we can save the result here instead of defining separately.

let sayHelloResult = appDemo1.helloFunc();
let addNumResult = appDemo1.addNum();

// we can add separate groups using nested describe

describe("Demo file return 'hello'", function () {
  describe("helloFunc tests", function () {
    it("App should return hello", function () {
      let hello = appDemo();
      assertChai.equal(hello, "hello");
    });

    it("Return type needs to be string", function () {
      let result = appDemo();
      assertChai.typeOf(result, "string");
    });
  });
  describe("addNum tests", function () {
    it("Add of two numbers", function () {
      let addNums = appDemo1.addNum(10, 10);
      assertChai.isAbove(addNums, 10);
    });

    it("Return type needs to be number", function () {
      let addNums1 = appDemo1.addNum(10, 10);
      assertChai.typeOf(addNums1, "number");
    });
  });
});

// Provides support for asynchronous code

// HOOKS  -  before, after, beforeEach, afterEach

// Arrow functions are not recommended -- Lambdas lexically bind this and cannot access the Mocha context.  -- ambdas will be more painful to refactor if the need

// Retry function is also there
// It’s not recommended to use this feature for unit tests.   ->   this.retries(2);

// We can manipulate the testing duration
describe("something slow", function () {
  this.slow(300000); // five minutes

  it("should take long enough for me to go make a sandwich", function () {
    // ...
  });
});
