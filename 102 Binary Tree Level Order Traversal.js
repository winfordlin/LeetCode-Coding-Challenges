/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
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
var levelOrder = function(root) {
    if (!root) {
        return null;
    }

    let queue = [];
    let container = [];
    queue.push(root);
    container.push([root.val]);

    while (queue.length !== 0){
            let node = queue.pop();
            let minicontainer = [];
            
            if (node.left){
                queue.push(node.left);
                minicontainer.push(node.left.val);
            }
            if (node.right){
                queue.push(node.right);
                minicontainer.push(node.right.val);
            }
            if (minicontainer.length !== 0){
                container.push(minicontainer);
            }
            
            
        }
        return container;
};


