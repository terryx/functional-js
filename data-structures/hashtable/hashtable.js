function HashTable() {
  const table = [];
  const loseloseHashCode = (key) => {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }

  // const djb2HashCode = (key) => {
  //   const hash = 5381;
  //
  //   for (let i = 0; i < key.length; i++) {
  //     hash = hash * 33 + key.charCodeAt(i);
  //   }
  //
  //   return hash % 1013;
  // }

  this.put = (key, value) => {
    const position = loseloseHashCode(key);

    table[position] = value;
  };

  this.remove = (key) => {
    const position = loseloseHashCode(key);

    table[position] = undefined;
  };

  this.get = (key) => {
    const position = loseloseHashCode(key);

    return table[position];
  };

  this.size = () => {
    return Object.keys(table).length;
  }
}

module.exports = HashTable;
