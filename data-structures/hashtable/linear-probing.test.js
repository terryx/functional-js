const test = require('ava');
const HashTable = require('./linear-probing');

test('put', t => {
  const hashtable = new HashTable();

  hashtable.put('gandalf', 'abc@gmail.com');

  t.is(hashtable.size(), 1);
  t.is(hashtable.get('gandalf'), 'abc@gmail.com');
});

test('remove', t => {
  const hashtable = new HashTable();

  hashtable.put('gandalf', 'abc@gmail.com');
  hashtable.remove('gandalf');

  t.is(hashtable.get('gandalf'), undefined);
})
