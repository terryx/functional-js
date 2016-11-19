function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  this.append = (element) => {
    let node = new Node(element);
    let current = undefined;

    if (!head) {
      head = node
    } else {
      current = head

      while(current.next) {
        current = current.next
      }

      current.next = node
    }

    length += 1;

    return node
  }

  this.size = () => length

  this.search = (position) => {
    if (position < 0 || position >= length) {
      return undefined
    }

    let index = 0;
    let current = head;
    while(position > index) {
      current = current.next;
      index += 1;
    }

    return current.element
  }

  this.remove = (position) => {
    if (position > length || position < 0) {
      return null
    }

    let index = 0;
    let current = head;
    let previous;

    if (position === 0) {
      head = current.next
    } else {
      while(position > index) {
        previous = current
        current = current.next
        index += 1
      }

      previous.next = current.next
    }

    length -= 1
    return current.element
  }
}

module.exports = LinkedList
