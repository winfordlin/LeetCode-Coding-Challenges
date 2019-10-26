/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

 

Example 1:



Input: [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
 

Note:

The number of nodes in the given tree is between 1 and 10^4.
-10^5 <= node.val <= 10^5
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  let queue = [];
  let level = 1;
  let largestLevel = 1;
  let output = -Infinity;
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    let total = 0;
    for (let i = 0; i < size; i++) {
      let temp = queue.shift();
      total += temp.val;
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    if (total > output) {
      output = total;
      largestLevel = level;
    }
    level++;
  }
  return largestLevel;
};
