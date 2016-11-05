class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop(element) {
    return this.items.pop()
  }

  clear() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1]
    }
  }

  size() {
    return this.items.length
  }
}

module.exports = Stack
