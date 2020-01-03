const chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var actual = 1;
var expected = 2;

assert.equal(actual, expected);
expect(actual).to.equal(expected);
actual.should.equal(expected);