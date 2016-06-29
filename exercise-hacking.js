function vector() {
  const array = [];

  return {
    get: function get(i) {
      return array[i];
    },
    store: function store(i, v) {
      array[i] = v;
    },
    append: function append(v) {
      array.push(v);
    }
  }
}

//How do you get access to private array ?
