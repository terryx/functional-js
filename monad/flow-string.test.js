const test = require('ava');
const string = require('../monad/flow-string');
const flow = require('lodash/fp/flow');
const map = require('lodash/fp/map');

//the rule is input and output must produce same type
test('flow basic structure', t => {
  const result = flow(
    string.mapUppercase,
    map(input => {
      if (input === 'GT') {
        return 'GRABTAXI';
      } else {
        return input;
      }
    })
  )(['grab', 'gt']);

  t.deepEqual(result, ['GRAB', 'GRABTAXI'])
});

test('flow to getServiceType', t => {
  const result = flow(
    string.mapUppercase,
    map(string.getServiceType)
  )(['grab', 'gc']);

  t.deepEqual(result, ['GRAB', 'GRABCAR'])
});
