const test = require('ava');
const BinarySearchTree = require('./binarytree01');

let tree;
let values = [];

const printNode = (value) => {
  values.push(value);
}

test.beforeEach(t => {
  tree = new BinarySearchTree();
  values = [];

  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);
  tree.insert(6);
});

test('binary search tree inOrderTraverse', t => {
  tree.inOrderTraverse(printNode);
  t.deepEqual(values, [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
});

test('binary search tree preOrderTraverse', t => {
  tree.preOrderTraverse(printNode);
  t.deepEqual(values, [11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);
});

test('binary search tree postOrderTraverse', t => {
  tree.postOrderTraverse(printNode);
  t.deepEqual(values, [3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]);
});

test('min', t => {
  t.is(tree.min(), 3);
});

test('max', t => {
  t.is(tree.max(), 25);
});

test('search', t => {
  t.is(tree.search(null), false);
  t.is(tree.search(1), false);
  t.is(tree.search(8), true);
});
