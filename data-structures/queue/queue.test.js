const test = require('ava')
const Queue = require('./queue')

test('insert item into queue', t => {
  const queue = Queue()

  queue.enqueue(1)
  queue.enqueue(2)

  t.is(queue.size(), 2)
})

test('remove item from queue', t => {
  const queue = Queue()

  queue.enqueue(1)
  queue.enqueue(2)

  queue.dequeue()

  t.is(queue.size(), 1)
})

test('clear item from queue', t => {
  const queue = Queue()

  queue.enqueue(1)
  queue.enqueue(2)

  queue.dequeue()
  queue.dequeue()

  t.is(queue.size(), 0)
  t.is(queue.isEmpty(), true)
})

test('get front item from queue', t => {
  const queue = Queue()

  queue.enqueue(1)
  queue.enqueue(2)

  t.is(queue.front(), 1)
})
