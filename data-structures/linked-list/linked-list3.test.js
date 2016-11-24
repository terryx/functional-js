const test = require('ava')
const LinkedList = require('./linked-list3')

test('linkedlist append', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)
  linkedlist.append(7)

  t.is(linkedlist.size, 3)
  t.is(linkedlist.search(2), 7)
})

test('remove empty element', t => {
  const linkedlist = new LinkedList();

  linkedlist.removeAt(0);

  t.is(linkedlist.size, 0);
  t.is(linkedlist.search(0), undefined);
  t.is(linkedlist.isEmpty(), true);
})

test('remove an element from linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)
  linkedlist.append(7)

  linkedlist.removeAt(1)

  t.is(linkedlist.size, 2)
  t.is(linkedlist.search(1), 7)

  linkedlist.append(105);
  t.is(linkedlist.size, 3);
  t.is(linkedlist.indexOf(105), 2);

  linkedlist.remove(105);
  t.is(linkedlist.size, 2);
  t.is(linkedlist.indexOf(105), -1);
})

test('remove last element from linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.append(1)
  linkedlist.append(3)

  linkedlist.removeAt(1)

  t.is(linkedlist.size, 1)
  t.is(linkedlist.search(1), undefined)
  t.is(linkedlist.search(0), 1)
});

test('insert element into linked list', t => {
  const linkedlist = new LinkedList()

  linkedlist.insert(0, 4)
  t.is(linkedlist.size, 1)

  linkedlist.append(3)
  linkedlist.append(7)

  linkedlist.insert(0, 10)
  t.is(linkedlist.size, 4)
  t.is(linkedlist.search(0), 10)

  const isInserted = linkedlist.insert(2, 15)

  t.is(isInserted, true)
  t.is(linkedlist.search(2), 15)

  const isNotInserted = linkedlist.insert(-1, 10)
  t.is(isNotInserted, false)
});
