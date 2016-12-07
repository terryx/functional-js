const test = require('ava');
const dictionary = require('./dictionary');

test.beforeEach(t => {
  const dict = dictionary();
  dict.set('A', 1);
  dict.set('B', 2);

  t.context.dict = dict;
});

test('initial props', t => {
  const dict = dictionary({ A: 10 });

  t.is(dict.has('A'), true);
  t.is(dict.size(), 1);
});

test('set', t => {
  const dict = t.context.dict;

  t.is(dict.size(), 2);
  t.deepEqual(dict.keys(), ['A', 'B']);
  t.deepEqual(dict.values(), [1, 2]);
});

test('delete', t => {
  const dict = t.context.dict;
  dict.set('C', 3);

  const isBDeleted = dict.delete('B');
  t.is(isBDeleted, true);
  t.is(dict.size(), 2);

  const isBDeletedAgain = dict.delete('B');
  t.is(isBDeletedAgain, false);
});

test('clear', t => {
  const dict = t.context.dict;
  dict.clear();

  t.is(dict.size(), 0);
  t.deepEqual(dict.keys(), []);
  t.deepEqual(dict.values(), []);
});
