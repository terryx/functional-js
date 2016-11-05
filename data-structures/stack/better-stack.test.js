const test = require('ava');
const Stack = require('./better-stack');

test('add element', t => {
  const stack = Stack()

  stack.push(1)

  t.is(stack.peek(), 1)
  t.is(stack.size(), 1)
});

test('remove element', t => {
  const stack = Stack()

  stack.push(1)
  stack.pop()

  t.is(stack.peek(), undefined)
  t.is(stack.isEmpty(), true)
});

test('pop element', t => {
  const stack = Stack()

  stack.push(1)
  stack.push(2)
  const popped = stack.pop()

  t.is(popped, 2)
})

test('clear elements', t => {
  const stack = Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.peek(), 3)

  stack.clear()

  t.is(stack.isEmpty(), true)
});
