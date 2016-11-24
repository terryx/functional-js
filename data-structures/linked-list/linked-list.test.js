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

test('insert element into linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.insert(0, 4)
  t.is(linkedlist.size(), 1)

  linkedlist.append(3)
  linkedlist.append(7)

  linkedlist.insert(0, 10)
  t.is(linkedlist.size(), 4)
  t.is(linkedlist.search(0), 10)

  linkedlist.insert(2, 15)
  t.is(linkedlist.search(2), 15)
})

test('toString', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(2)
  linkedlist.append(3)

  t.is(linkedlist.toString(), '1,2,3')
})

test('indexOf', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(2)
  linkedlist.append(3)

  t.is(linkedlist.indexOf(1), 0)
})

test('isEmpty', t => {
  const linkedlist = new LinkedList()

  t.is(linkedlist.isEmpty(), true)

  linkedlist.append(1)
  t.is(linkedlist.isEmpty(), false)
})
