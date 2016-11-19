const test = require('ava')
const LinkedList = require('./linked-list2')

test('linkedlist append', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)
  linkedlist.append(7)

  t.is(linkedlist.size(), 3)
  t.is(linkedlist.search(2), 7)
})
