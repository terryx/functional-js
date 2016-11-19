const test = require('ava')
const LinkedList = require('./linked-list')

test('append element into linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)
  linkedlist.append(7)

  t.is(linkedlist.size(), 3)
  t.is(linkedlist.search(2), 7)
})

test('remove element from linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)
  linkedlist.append(7)

  linkedlist.remove(1)

  t.is(linkedlist.size(), 2)
  t.is(linkedlist.search(1), 7)
})
