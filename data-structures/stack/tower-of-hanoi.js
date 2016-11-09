const towerOfHanoi = (n, from, to, helper) => {
  if (n <= 0) {
    return
  }

  towerOfHanoi(n - 1, from, helper, to)
  to.push(from.pop())
  towerOfHanoi(n - 1, helper, to, from)
}

module.exports = towerOfHanoi
