function BinarySearchTree() {
  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  const insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  let root = null;

  this.insert = (key) => {
    let newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  this.search = (key) => {};

  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  this.inOrderTraverse = (callback) => {
    inOrderTraverseNode(root, callback)
  };

  this.preOrderTraverse = (callback) => {
    preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = (callback) => {
    postOrderTraverseNode(root, callback);
  };

  const minNode = (node) => {
    if (!node) {
      return null;
    }

    while(node && node.left !== null) {
      node = node.left;
    }

    return node.key;
  };

  this.min = () => {
    return minNode(root);
  };

  const maxNode = (node) => {
    if (!node) {
      return null;
    }

    while(node && node.right !== null) {
      node = node.right;
    }

    return node.key;
  };

  this.max = () => {
    return maxNode(root);
  };

  this.remove = (key) => {};
}

module.exports = BinarySearchTree;
