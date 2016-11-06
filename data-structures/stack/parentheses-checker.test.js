const test = require('ava');
const Stack = require('./stack');
const checker = require('./parentheses-checker')

test('symbols', t => {
  const stack = new Stack()

  t.is(checker('[abc]'), true)
  t.is(checker('[{()}]'), true)
  t.is(checker('[(), (abed), {}, {}]'), true)

  t.is(checker('{([])}'), true)
  t.is(checker('{{([][])}()}'), true)

  t.is(checker(), false)
  t.is(checker('a'), false)
  t.is(checker(''), false)
  t.is(checker('['), false)
  t.is(checker('}'), false)
  t.is(checker('[{()]'), false)
  t.is(checker('][{}'), false)
  t.is(checker('())'), false)
  t.is(checker(')asvs)())'), false)
});
