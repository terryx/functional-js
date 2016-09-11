'use strict';

const string = function (spec) {
  let data = spec;

  const api = {};

  api.generateForTest = function(input) {
    data = [input, spec].join(' ');

    return this;
  }

  api.uppercase = function() {
    data = data.toUpperCase();
    return this;
  }

  api.trim = function() {
    data = data.trim()
    return this;
  }

  api.value = function() {
    return data;
  }

  return Object.freeze(api);
}

module.exports = string;
