var assert = require("assert");
describe("Array", function () {
  describe("#indexOf", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

var assertChai = require("chai").assert;
var appDemo = require("../src/demo");

describe("Demo file return 'hello'", function () {
  it("App should return hello", function () {
    assertChai.equal(appDemo(), "hello");
  });
});
