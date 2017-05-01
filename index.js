var test = function() {
  return "Hello, world!"
}

var testTwo = function(num1, num2) {
  return num1 * num2
}

if(typeof exports !== 'undefined') {
    exports.test = test;
    exports.testTwo = testTwo
}
