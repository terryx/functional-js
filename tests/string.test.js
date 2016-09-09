const test = require('ava');
const string = require('../monad/string');

test('uppercase and trim all values', t => {

  const result = string('Grab   ')
    .uppercase()
    .trim()
    .value()

  t.is(result, 'GRAB')
});

test('all chain functions', t => {

  const result = string('Grab      ')
    .generateForTest('fake')
    .uppercase()
    .trim()
    .value()

  t.is(result, 'FAKE GRAB')
  t.is(result.length, 9);
});
