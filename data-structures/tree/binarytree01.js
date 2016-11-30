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

    while (node && node.left !== null) {
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

    while (node && node.right !== null) {
      node = node.right;
    }

    return node.key;
  };

  this.max = () => {
    return maxNode(root);
  };

  const searchNode = (node, key) => {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return searchNode(node.left, key);
    }

    if (key > node.key) {
      return searchNode(node.right, key);
    }

    return true;
  };

  this.search = (key) => {
    return searchNode(root, key);
  };

  const removeNode = (node, key) => {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = findMinNode(node.right);

      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);

      return node;
    }
  };

  const findMinNode = (node) => {
    while(node && node.left !== null) {
      node = node.left;
    }

    return node;
  }

  this.remove = (key) => {
    root = removeNode(root, key);
  };
}

module.exports = BinarySearchTree;
