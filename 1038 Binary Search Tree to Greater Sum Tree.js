/*
Given the root of a binary search tree with distinct values, modify it so that every node has a new value equal to the sum of the values of the original tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:



Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 

Note:

The number of nodes in the tree is between 1 and 100.
Each node will have value between 0 and 100.
The given tree is a binary search tree.
 
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//sub-optimal

var bstToGst = function(root) {
  let total = preOrderTotal(root);
  inOrderTransformation(root, total);
  return root;
};

function preOrderTotal(root) {
  if (!root) return root;

  let stack = [];
  stack.push(root);
  let total = 0;

  while (stack.length) {
    root = stack.pop();
    total += root.val;
    if (root.right) stack.push(root.right);
    if (root.left) stack.push(root.left);
  }
  return total;
}

function inOrderTransformation(root, greater) {
  if (!root) return root;

  let stack = [];
  let total = 0;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    let temp = root.val;
    root.val = greater - total;
    total += temp;
    root = root.right;
  }
}

let four = new TreeNode(4);
let one = new TreeNode(1);
let zero = new TreeNode(0);
let two = new TreeNode(2);
let three = new TreeNode(3);
let six = new TreeNode(6);
let five = new TreeNode(5);
let seven = new TreeNode(7);
let eight = new TreeNode(8);

four.left = one;
one.left = zero;
one.right = two;
two.right = three;
four.right = six;
six.left = five;
six.right = seven;
seven.right = eight;

bstToGst(four);
