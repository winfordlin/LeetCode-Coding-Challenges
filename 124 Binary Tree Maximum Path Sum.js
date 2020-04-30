/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    return helper(root)[1];
};

var helper = function (root) {
    if (!root) {
        return [-Infinity, -Infinity];
    }

    let left = helper(root.left);
    let right = helper(root.right);

    let localMax = root.val + Math.max(left[0], right[0], 0);

    //bubble globalMax to root
    //cache in [localMax,globalMax]
    //localMax: 
    //three options, root + 0, root + local-left, root + local-right
    //globalMax:
    //four options, onlyLeftSide, onlyRightSide, localMax (rootOnly, root + onlyLeftSide) + onlyRightSide),  connectAll (onlyLeftSide + root + onlyRightSide)
    let globalMax = Math.max(left[1], right[1], localMax, root.val + local[0] + right[0]);
    return [localMax, globalMax];
}