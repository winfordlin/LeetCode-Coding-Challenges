/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  //inorder - max value
  //delete from greater
  let total = inOrder(root);
  inOrderTransformation(root, total);
  return root;
};

var inOrder = function(root) {
  let stack = [];
  let output = 0;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.length;
    }
    root = stack.pop();
    output += root.val;
    root = root.right;
  }
  return output;
};

var inOrderTransformation = function(root, greater) {
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
};
