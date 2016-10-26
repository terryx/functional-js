const test = require('ava');
const bubble = require('../sorting/bubble');

test('bubble sort', t => {
  const nums = [1,2,3,6,7,4,9,8,19,13]

  t.deepEqual(bubble(nums), [1,2,3,4,6,7,8,9,13,19])
})
