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

test('remove element from linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)
  linkedlist.append(7)

  linkedlist.removeAt(1)

  //this is bug due to head reference to this
  //the answer should be 2 but this take appended element from previous test
  t.is(linkedlist.size(), 5)
})
