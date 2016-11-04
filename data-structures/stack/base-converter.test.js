const test = require('ava');
const baseConverter = require('./base-converter');

test('baseConverter', t => {
  const num1 = 10
  const num2 = 12

  t.is(baseConverter(num1, 2), num1.toString(2))
  t.is(baseConverter(num2, 2), num2.toString(2))

  t.is(baseConverter(num1, 6), num1.toString(6))
  t.is(baseConverter(num2, 6), num2.toString(6))
})
