const Stack = require('./better-stack')

const binary = (num) => {
  const stack = Stack()

  let remainder, binaryString = ''

  while(num > 0) {
    remainder = Math.floor(num % 2);

    stack.push(remainder)

    num = Math.floor(num / 2)
  }

  while(!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }

  return binaryString
}

module.exports = binary
