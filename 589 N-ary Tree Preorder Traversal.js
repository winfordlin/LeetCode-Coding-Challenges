/*
Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:

Return its preorder traversal as: [1,3,5,6,2,4].

Note:

Recursive solution is trivial, could you do it iteratively?
*/

// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {Node} root
 * @return {number[]}
 */

var preorderIterative = function(root) {
  if (!root) return [];

  let stack = [];
  let output = [];
  stack.push(root);

  while (stack.length) {
    root = stack.pop();
    output.push(root.val);
    for (let i = root.children.length - 1; i >= 0; i--) {
      stack.push(root.children[i]);
    }
  }
  return output;
};
