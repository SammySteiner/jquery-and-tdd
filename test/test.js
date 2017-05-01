var expect = require('expect.js');
var myCode = require('../index.js')

describe ('test', function() {
  it('returns "Hello, world!" as a string', function() {
    expect(myCode.test()).to.be("Hello, world!")
  })
})

describe ('test2', function() {
  it('multiplies two numbers together', function() {
    expect(myCode.testTwo(3, 5)).to.be(15)
  })
})
