const test = require('ava');
const Set = require('./set');

test('add', t => {
  const set = new Set();

  set.add(1);
  set.add(2);

  t.is(set.size(), 2)
});

test('union', t => {
  const setA = new Set();

  setA.add(1);
  setA.add(2);
  setA.add(3);

  const setB = new Set();

  setB.add(3);
  setB.add(4);
  setB.add(5);

  const union = setA.union(setB);

  t.deepEqual(union.values(), [1, 2, 3, 4, 5]);
  t.deepEqual(setA.values(), [1, 2, 3]);
});

test('intersection', t => {
  const setA = new Set();

  setA.add(1);
  setA.add(2);
  setA.add(3);

  const setB = new Set();

  setB.add(3);
  setB.add(4);
  setB.add(5);

  const intersection = setA.intersection(setB);

  t.deepEqual(intersection.values(), [3])
});

test('subset', t => {
  const setA = new Set();

  setA.add(1);
  setA.add(2);

  const setB = new Set();

  setB.add(1);
  setB.add(2);
  setB.add(3);
  setB.add(4);

  const subsetOfB = setA.subset(setB);
  const subsetOfA = setB.subset(setA);

  t.is(subsetOfB, true);
  t.is(subsetOfA, false);
});
