const test = require('ava');
const binary = require('./binary');

test('binary', t => {
  const num1 = 10
  const num2 = 12

  t.is(binary(num1), num1.toString(2))
  t.is(binary(num2), num2.toString(2))
  t.not(binary(num2), num2.toString(6))
})
