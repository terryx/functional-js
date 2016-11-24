const test = require('ava');
const HashTable = require('./hashtable-separate-chain');

test('put', t => {
  const hashtable = new HashTable();

  hashtable.put('Jamie', 'jamie@gmail.com');
  hashtable.put('Sue', 'sue@gmail.com');

  t.is(hashtable.size(), 1); //since Jamie and Sue shared same hash
  t.is(hashtable.get('Jamie'), 'jamie@gmail.com');

  hashtable.put('July', 'july@gmail.com');
  t.is(hashtable.size(), 2);
});

test('remove', t => {
  const hashtable = new HashTable();

  hashtable.put('Jamie', 'jamie@gmail.com');
  hashtable.put('Sue', 'sue@gmail.com');
  hashtable.remove('Jamie');

  t.is(hashtable.size(), 1); //since Jamie and Sue shared same hash
  t.is(hashtable.get('Jamie'), undefined);

  hashtable.remove('Sue');
  t.is(hashtable.size(), 1);
  t.is(hashtable.get('Sue'), undefined);
});
