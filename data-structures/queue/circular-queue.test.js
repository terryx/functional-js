const test = require('ava')
const CircularQueue = require('./circular-queue')

test('Hot Potato game', t => {
  const queue = CircularQueue(['Apple', 'Pen', 'Jane'], 2)

  t.is(queue, 'Pen')
})
