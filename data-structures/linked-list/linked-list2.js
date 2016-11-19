const LinkedList = (function () {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }

  let length = 0;
  let head = null;

  class LinkedList {
    append(element) {
      const node = new Node(element)

      if (!head) {
        head = node
      } else {
        let current = head

        while(current.next) {
          current = current.next
        }

        current.next = node
      }

      length += 1;

      return node
    }

    size() {
      return length
    }

    search(position) {
      let index = 0;
      let current = head;

      while(index < position) {
        current = current.next
        index += 1;
      }

      return current.element
    }
  }

  return LinkedList;
})();

module.exports = LinkedList
