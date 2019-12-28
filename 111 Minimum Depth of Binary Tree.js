/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
 * @return {number}
 */
var minDepth = function(root) {
  //bfs traversal to find depth level of nearest leaf (no children)
  if (!root) return 0;

  queue = [root];
  let depth = 1;

  let isLeaf = function(root) {
    return root.left === null && root.right === null;
  };

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (isLeaf(current)) {
        return depth;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth++;
  }

  return -1;
};
