const test = require('ava')
const queue = require('./queue')

test('insert item into queue', t => {
  const q = queue()

  q.enqueue(1)
  q.enqueue(2)

  t.is(q.size(), 2)
})

test('remove item from queue', t => {
  const q = queue()

  q.enqueue(1)
  q.enqueue(2)

  q.dequeue()

  t.is(q.size(), 1)
})

test('clear item from queue', t => {
  const q = queue()

  q.enqueue(1)
  q.enqueue(2)

  q.dequeue()
  q.dequeue()

  t.is(q.size(), 0)
  t.is(q.isEmpty(), true)
})

test('get front item from queue', t => {
  const q = queue()

  q.enqueue(1)
  q.enqueue(2)

  t.is(q.front(), 1)
})
