/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/


 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var preorderTraversal = function(root,arr=[]) {
    if (root){
        arr.push(root.val)
        preorderTraversal(root.left,arr);
        preorderTraversal(root.right,arr);
    }
    return arr;
};
