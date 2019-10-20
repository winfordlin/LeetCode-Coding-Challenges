/*
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:

Return its postorder traversal as: [5,6,3,2,4,1].

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
var postorder = function(root) {
  if (!root) return [];

  let stack = [];
  let output = [];
  stack.push(root);

  while (stack.length) {
    root = stack.pop();
    output.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      stack.push(root.children[i]);
    }
  }
  return output.reverse();
};
