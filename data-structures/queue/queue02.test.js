const Queue = require('./queue02');
const test = require('ava');

test('enqueue', t => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  t.is(queue.size, 2);
});

test('dequeue', t => {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  queue.dequeue();

  t.is(queue.front, 2);
  t.is(queue.size, 3); //items is shared
});
