/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
*/

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    if (Math.abs(maxDepth(root.left)-maxDepth(root.right)) > 1){
        return false
    }else{
        return isBalanced(root.left) && isBalanced(root.right);
    }
};

function maxDepth(root){
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
}
  
  

let one = new TreeNode(1);

let two = new TreeNode(2);

let three = new TreeNode(3);

let four = new TreeNode(4);

let five = new TreeNode(5);

let six = new TreeNode(6)

one.left = two;
one.right = three;
two.left = four;
two.right = five;


console.log(isBalanced(one))


