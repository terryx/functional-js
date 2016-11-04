const stack = () => {
  let items = []

  const push = (element) => items.push(element)

  const pop = () => items.pop()

  const clear = () => items = []

  const isEmpty = () => items.length === 0

  const peek = () => {
    if (!isEmpty()) {
      return items[items.length - 1]
    }
  }

  const size = () => items.length

  return Object.freeze({
    push,
    pop,
    clear,
    isEmpty,
    peek,
    size
  })
}

module.exports = stack
