const test = require('ava');
const Dictionary = require('./dictionary');

test('add', t => {
  const dictionary = new Dictionary();

  dictionary.set(1, 'abc');
  dictionary.set(2, 'bde');
  t.deepEqual(dictionary.values(), ['abc', 'bde']);

  dictionary.set(3, undefined);
  t.deepEqual(dictionary.values(), ['abc', 'bde', undefined]);
});
