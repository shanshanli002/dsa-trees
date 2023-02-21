/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let depth = 0;
    let levelsToVisit = [];
    //should use BFS, and loop through over all children and if a child is found with no left or right, is a leaf node and then return
    if (this.root && this.root.left && this.root.right) {
      levelsToVisit.push([this.root]);
    }

    while (levelsToVisit.length > 0) {
      depth += 1;
      let currentLevel = levelsToVisit.shift();
      let nextLevel = [];

      for (let node of currentLevel) {
        if (!node.right && !node.left) {
          return depth;
        }

        if (node.left) {
          nextLevel.push(node.left);
        }
        if (node.right) {
          nextLevel.push(node.right);
        }
      }

      if (nextLevel.length > 0) {
        levelsToVisit.push(nextLevel);
      }
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    //BFS would be easiest to find the height of a tree

    let levelsToVisit = [];
    let height = 0;

    if(this.root) {
      levelsToVisit.push([this.root]);
    }

    while(levelsToVisit.length > 0) {
      let currentLevel = levelsToVisit.shift();
      let nextLevel = [];
      height += 1; 

      for(let node of currentLevel) {
        if(node.left) {
          nextLevel.push(node.left);
        }
        if(node.right) {
          nextLevel.push(node.right);
        }
      }

      if(nextLevel.length > 0){
        levelsToVisit.push(nextLevel);
      }
    }

    return height; 
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nodesToVisit = [];
    let smallestNodeLargerThanLowerBound = null;
    
    if(this.root) {
      nodesToVisit.push(this.root);
    }
    while(nodesToVisit.length > 0) {
      let currentNode = nodesToVisit.shift();

      if(smallestNodeLargerThanLowerBound == null) {
        if(currentNode.val> lowerBound) {
          smallestNodeLargerThanLowerBound = currentNode.val;
        }
      } else {
        if(currentNode.val > lowerBound && (currentNode.val < smallestNodeLargerThanLowerBound)) {
          smallestNodeLargerThanLowerBound = currentNode.val;
        }
      }

      if(currentNode.right) {
        nodesToVisit.push(currentNode.right);
      }

      if(currentNode.left){
        nodesToVisit.push(currentNode.left);
      }
    }


    return smallestNodeLargerThanLowerBound;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
