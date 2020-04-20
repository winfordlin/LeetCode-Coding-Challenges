/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)


Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]


Note: 

1 <= preorder.length <= 100
The values of preorder are distinct.
*/


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

//not optimal but readible //worst case O(n)^2
//optimal runtime and space O(N)

var bstFromPreorder = function (preorder) {
    //create bst
    let bst = null;
    // loop through preorder array and place each element into the tree using recursion
    for (let i = 0; i < preorder.length; i++) {
        bst = addNodetoBST(bst, preorder[i]);
    }
    return bst;
};

const addNodetoBST = (bst, val) => {
    if (bst === null) {
        return new TreeNode(val)
    }

    if (val < bst.val) {
        bst.left = addNodetoBST(bst.left, val)
    } else if (val > bst.val) {
        bst.right = addNodetoBST(bst.right, val)
    }

    return bst;
}
