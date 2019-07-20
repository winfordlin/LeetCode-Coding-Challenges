/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root,output = []) {
    output.push(root ? root.val : root);
  if (root) {
    serialize(root.left, output);
    serialize(root.right, output);
  }
  return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length || data[0] === null){
        data.shift();
        return null;
    }

    let root = new TreeNode(data.shift());
    root.left = deserialize(data);
    root.right = deserialize(data);
    return root;
};





/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);

one.left = two;
one.right = three;

console.log(deserialize(serialize(one)))
