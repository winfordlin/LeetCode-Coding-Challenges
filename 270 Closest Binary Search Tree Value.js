/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

var closestValue = function (root, target) {
    return search(root, target, Infinity);
};

var search = function (root, target, closest) {
    if (root === null) return closest;

    //assign closest variable as the root value if difference is smaller than closest
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
        closest = root.val;
    }

    if (target < root.val) {
        return search(root.left, target, closest);
    } else if (target > root.val) {
        return search(root.right, target, closest);
    } else {
        return closest;
    }
}

