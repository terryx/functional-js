const dictionary = (props = {}) => {
  let item = props;
  const api = {};

  api.set = (key, value) => {
    item[key] = value;
  };

  api.delete = (key) => {
    if (!api.has(key)) {
      return false;
    }

    delete item[key];
    return true;
  };

  api.has = (key) => {
    return key in item;
  };

  api.get = (key) => {
    return item[key];
  };

  api.size = () => {
    return Object.keys(item).length;
  };

  api.clear = () => {
    item = {};
  };

  api.keys = () => {
    return Object.keys(item);
  };

  api.values = () => {
    return Object.keys(item).map(key => item[key]);
  }

  return Object.freeze(api);
}

module.exports = dictionary;
