const test = require('ava')
const PriorityQueue = require('./priority-queue')

test('PriorityQueue', t => {

  const queue = PriorityQueue()

  queue.enqueue('Adam', 3)
  queue.enqueue('James', 5)
  queue.enqueue('Biora', 1)
  queue.enqueue('Bio', 1)

  t.deepEqual(queue.items(), ['Biora', 'Bio', 'Adam', 'James'])

})
