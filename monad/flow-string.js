'use strict';

const constructor = () => {
  const api = {};

  api.mapUppercase = (inputs) => {
    return inputs.map(input => input.toUpperCase());
  }

  return Object.freeze(api);

};

module.exports = constructor;
