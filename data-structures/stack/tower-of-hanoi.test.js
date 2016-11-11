const test = require('ava')
const TowerOfHanoi = require('./tower-of-hanoi')
const Stack = require('./better-stack')

test('TowerOfHanoi', t => {
  const start = Stack()
  const helper = Stack()
  const end = Stack()

  start.push(3)
  start.push(2)
  start.push(1)

  const result = TowerOfHanoi(start.size(), start, end, helper)
});
