const test = require('ava');
const Stack = require('./stack');

test('add element', t => {
  const stack = new Stack()

  stack.push(1)

  t.is(stack.peek(), 1)
  t.is(stack.size(), 1)
});

test('remove element', t => {
  const stack = new Stack()

  stack.push(1)
  stack.pop()

  t.is(stack.peek(), undefined)
  t.is(stack.isEmpty(), true)
});

test('clear elements', t => {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.peek(), 3)

  stack.clear()
  
  t.is(stack.isEmpty(), true)
});
