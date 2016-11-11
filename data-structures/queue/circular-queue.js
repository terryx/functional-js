const Queue = require('./queue')

const circularQueue = (array = [], num) => {
  const queue = Queue()

  for (let i = 0, len = array.length; i < len; i++) {
    queue.enqueue(array[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    queue.dequeue()
  }

  return queue.front()
}

module.exports = circularQueue
