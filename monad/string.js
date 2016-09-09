const string = function (spec) {
  let data;

  const generateForTest = function(input) {
    data = [input, spec].join(' ');

    return this;
  }

  const uppercase = function(input) {
    data = data.toUpperCase();
    return this;
  }

  const trim = function(input) {
    data = data.trim
    return this;
  }

  const value = function() {
    return data;
  }

  return {
    generateForTest,
    uppercase,
    value
  }
}

const result = string('Grab')
  .generateForTest(222)
  .uppercase()
  .value()

console.log(result);
