/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //implement using DFS, uses a stack
    let nodesToVisit = [];
    if (this.root) {
      nodesToVisit.push(this.root);
    }
    let sum = 0;
    while (nodesToVisit.length > 0) {
      let currentNode = nodesToVisit.pop();
      sum += currentNode.val;
      if (currentNode.children.length > 0) {
        for (let child of currentNode.children) {
          nodesToVisit.push(child);
        }
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //use DFS to count evens, uses a stack
    let evenNodes = 0;
    let nodesToVisit = [];
    if (this.root) {
      nodesToVisit.push(this.root);
    }

    while (nodesToVisit.length > 0) {
      let currentNode = nodesToVisit.pop();
      if (currentNode.val % 2 === 0) {
        evenNodes += 1;
      }

      if (currentNode.children) {
        for (let child of currentNode.children) {
          nodesToVisit.push(child);
        }
      }
    }

    return evenNodes;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //DFS using a stack to keep track of nodes to visit
    let nodesToVisit = [];
    let nodesGreaterThanLowerBound = 0;
    if (this.root) {
      nodesToVisit.push(this.root);
    }

    while (nodesToVisit.length > 0) {
      let currentNode = nodesToVisit.pop();
      if (currentNode.val > lowerBound) {
        nodesGreaterThanLowerBound += 1;
      }
      if (currentNode.children.length > 0) {
        for (let child of currentNode.children) {
          nodesToVisit.push(child);
        }
      }
    }
    return nodesGreaterThanLowerBound;
  }

  
}

module.exports = { Tree, TreeNode };
