const LinkedList = require('../linked-list/linked-list3');

function HashTable() {
  const table = [];
  const loseloseHashCode = (key) => {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }

  function ValuePair(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  }

  this.put = (key, value) => {
    const position = loseloseHashCode(key);

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }

    table[position].append(new ValuePair(key, value));
  };

  this.remove = (key) => {
    const position = loseloseHashCode(key);

    if (table[position] === undefined) {
      return false;
    }

    let current = table[position].head;

    while (current.next) {
      if (current.element.key === key) {
        table[position].remove(current.element);

        if (table[position].isEmpty()) {
          table[position] = undefined;
        }

        return true;
      }

      current = current.next;
    }

    if (current.element.key === key) {
      table[position].remove(current.element);

      if (table[position].isEmpty()) {
        table[position] = undefined;
      }

      return true;
    }

    return false;
  };

  this.get = (key) => {
    const position = loseloseHashCode(key);

    if (table[position] === undefined) {
      return undefined;
    }

    let current = table[position].head;

    while (current.next) {
      if (current.element.key === key) {
        return current.element.value;
      }

      current = current.next;
    }

    if (current.element.key === key) {
      return current.element.value;
    }
  };

  this.size = () => {
    return Object.keys(table).length;
  }
}

module.exports = HashTable;
