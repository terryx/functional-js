const Queue = (function() {
  const items = [];

  class Queue {
    enqueue(element) {
      items.push(element);
    }

    dequeue() {
      return items.shift();
    }

    get front() {
      return items[0];
    }

    get size() {
      return items.length;
    }
  }

  return Queue;
}());

module.exports = Queue;
