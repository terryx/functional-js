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
    let position = loseloseHashCode(key);

    if (table[position] === undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      let index = ++position;
      while (table[index]) {
        index += 1;
      }

      table[index] = new ValuePair(key, value);
    }
  };

  this.get = (key) => {
    let position = loseloseHashCode(key);

    if (!table[position]) {
      return undefined;
    }

    if (table[position].key === key) {
      return table[position].value;
    }

    let index = ++position;

    while (table[index] === undefined || table[index].key !== key) {
      index += 1;
    }

    if (table[index].key === key) {
      return table[index].value;
    }
  };

  this.remove = (key) => {
    let position = loseloseHashCode(key);

    if (!table[position]) {
      return false;
    }

    if (table[position].key = key) {
      table[position] = undefined;
      return true;
    }

    let index = ++position;

    while(table[index] === undefined || table[index].key !== key) {
      index += 1;
    }

    if (table[index].key === key) {
      table[position] = undefined;
      return true;
    }
  };

  this.size = () => {
    return Object.keys(table).length;
  }
}

module.exports = HashTable;
