function Dictionary() {
  const items = {};

  this.set = (key, value) => {
    items[key] = value;
  }

  this.delete = (key) => {
    if (!this.has(key)) {
      return false;
    }

    delete items[key];
    return true;
  }

  this.has = (key) => {
    return key in items;
  }

  this.get = (key) => {
    return this.has(key) ? items[key] : undefined;
  }

  this.clear = () => {
    items = {};
  }

  this.size = () => {}

  this.keys = () => {}

  this.values = () => {
    const values = [];

    Object.keys(items).forEach(key => {
      values.push(items[key]);
    });

    return values;
  }
}

module.exports = Dictionary;
