const Stack = require('./better-stack')

const constructor = (num, base) => {
  const stack = Stack()

  let remainder, baseString = '', digits = '0123456789ABCDEF'

  while(num > 0) {
    remainder = Math.floor(num % base);

    stack.push(remainder)

    num = Math.floor(num / base)
  }

  while(!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }

  return baseString
}

module.exports = constructor
