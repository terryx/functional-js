const PriorityQueue = () => {
  let items = []

  const enqueue = (element, priority) => {
    const item = {
      element,
      priority
    }

    let added = false

    for (let i = 0, len = items.length; i <= len; i++) {
      if (items[i]) {
        if (items[i].priority <= priority) {
          items.splice(i, 0, item)
          added = true;
          break;
        }
      }

      if (!added) {
        items.push(item)
        break;
      }
    }
  }

  const sort = () => {
    const result = items.sort((a, b) => {
      return a.priority > b.priority
    })
    .map(item => {
      return item.element
    })

    return result
  }

  return {
    enqueue,
    items: sort
  }
}

module.exports = PriorityQueue
