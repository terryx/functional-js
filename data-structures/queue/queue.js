const queue = () => {
  const items = [];

  const enqueue = (element) => {
    items.push(element);
  }

  const dequeue = () => {
    return items.shift();
  }

  const front = () => {
    return items[0];
  }

  const size = () => {
    return items.length;
  }

  const isEmpty = () => {
    return items.length === 0;
  }

  return Object.freeze({
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
  })
}

module.exports = queue;
