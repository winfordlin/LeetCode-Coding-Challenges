/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  let queue = [];
  let output = [];
  queue.push(root);
  let l2r = false;

  while (queue.length) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let temp = queue.shift();
      if (l2r) {
        level.unshift(temp.val);
      } else {
        level.push(temp.val);
      }
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    l2r = !l2r;
    output.push(level);
  }
  return output;
};
