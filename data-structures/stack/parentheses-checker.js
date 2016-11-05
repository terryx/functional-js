const Stack = require('./better-stack')

const constructor = (input) => {
  const openers = '[{('
  const closers = ']})'
  const stack = Stack()

  if (!input) {
    return false
  }

  let index = 0,
    balanced = true,
    lastItem,
    symbol;

  while (index < input.length && balanced) {
    symbol = input.charAt(index) //[

    if (openers.indexOf(symbol) > -1) {
      stack.push(symbol)
    } else {
      if (stack.isEmpty()) {
        balanced = false
      }

      if (closers.indexOf(symbol) > -1) {
        lastSymbol = stack.pop()
        if (openers.indexOf(lastSymbol) !== closers.indexOf(symbol)) {
          balanced = false
        }
      }
    }

    index++
  }

  return balanced
}

module.exports = constructor
