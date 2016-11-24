const LinkedList = (function() {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }

  const length = new WeakMap()
  const head = new WeakMap()

  class LinkedList {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    get head() {
      return head.get(this)
    }

    get size() {
      return length.get(this)
    }

    append(element) {
      const node = new Node(element)

      let current = this.head;

      if (!current) {
        head.set(this, node)
      } else {
        while (current.next) {
          current = current.next
        }

        current.next = node
      }

      length.set(this, this.size + 1)
    }

    search(position) {
      let index = 0;
      let current = this.head;

      if (!current) {
        return undefined
      }

      while (index < position) {
        current = current.next
        index += 1;
      }

      if (!current) {
        return undefined
      }

      return current.element
    }

    removeAt(position) {
      let index = 0;
      let current = this.head;
      let previous;

      if (!current) {
        return undefined
      }

      if (position === 0) {
        head.set(this, current.next);
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index += 1;
        }

        previous.next = current.next
      }

      length.set(this, this.size - 1)
      return current.element
    }

    indexOf(element) {
      let current = this.head;
      let index = 0;

      while (current) {
        if (element === current.element) {
          return index;
        }

        index += 1;
        current = current.next;
      }

      return -1;
    }

    remove(element) {
      let index = this.indexOf(element);
      this.removeAt(index);
    }

    insert(position, element) {
      if (position < 0 || position > this.size) {
        return false
      }

      let current = this.head
      let previous;
      let index = 0

      let node = new Node(element)

      if (position === 0) {
        node.next = current
        head.set(this, node)
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index += 1
        }

        previous.next = node
        node.next = current
      }

      length.set(this, this.size + 1)

      return true
    }

    isEmpty() {
      return this.size === 0;
    }
  }

  return LinkedList;
})();

module.exports = LinkedList
