/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {
  if (!root) return [];

  let queue = [];
  let output = [];

  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let temp = queue.shift();
      level.push(temp.val);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    output.unshift(level);
  }
  return output;
};

let three = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

levelOrderBottom(three);
