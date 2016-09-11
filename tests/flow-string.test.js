const test = require('ava');
const string = require('../monad/flow-string');
const flow = require('lodash/fp/flow');
const map = require('lodash/fp/map');

test('flow structure', t => {
  const result = flow(
    string().mapUppercase,
    map(input => {
      if (input === 'FAKE') {
        return 'FAKER'
      }

      return input;
    })
  )(['grab', 'fake']);

  t.deepEqual(result, ['GRAB', 'FAKER'])
});
