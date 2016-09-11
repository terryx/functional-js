'use strict';

const constructor = () => {
  const api = {};

  api.mapUppercase = (inputs) => {
    return inputs.map(input => input.toUpperCase());
  }

  api.getServiceType = (input) => {
    if (input === 'GC') {
      return 'GRABCAR';
    }

    return input;
  }

  return Object.freeze(api);
};

module.exports = constructor();
