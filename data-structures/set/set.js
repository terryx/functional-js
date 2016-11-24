function Set() {
  let items = {};

  this.add = (value) => {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }

    return false;
  }

  this.delete = (value) => {
    if (!this.has(value)) {
      return false
    }

    delete items[value];
    return true;
  }

  this.has = (value) => {
    return items.hasOwnProperty(value);
  }

  this.clear = () => {
    items = {};
  }

  this.size = () => {
    return Object.keys(items).length;
  }

  this.values = () => {
    const values = [];

    Object.keys(items).forEach(key => {
      values.push(items[key]);
    });

    return values;
  }

  this.union = (otherSet) => {
    const set = new Set();

    this.values().forEach(value => {
      set.add(value);
    });

    otherSet.values().forEach(value => {
      set.add(value);
    });

    return set;
  }

  this.intersection = (otherSet) => {
    const set = new Set();

    this.values().forEach(value => {
      if (otherSet.has(value)) {
        set.add(value);
      }
    });

    return set;
  }

  this.subset = (otherSet) => {
    if (this.size() > otherSet.size()) {
      return false;
    }

    otherSet.values().every(value => {
      if (!this.has(value)) {
        return false
      }
    });

    return true
  }
}

module.exports = Set;
