/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

/**
 * Initialize your data structure here.
 */
class Node {
  constructor() {
    this.charList = {};
    this.isEndofWord = false;
  }
}

var Trie = function() {
  this.root = new Node();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  //go through the root
  for (const char of word) {
    //go through the individual char of the word
    if (!(char in node.charList)) {
      //create a new Node
      node.charList[char] = new Node();
    }
      //advance another depth
      node = node.charList[char];
    }
  }
  //reached the end of word
  node.isEndofWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  //go through the root
  for (const char of word) {
    // go through the individual char of the word
    if (!(char in node.charList)) {
      // can't find the char
      return false;
    }
    //advance another depth
    node = node.charList[char];
  }
  //if at the end word, return true
  return node.isEndofWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;

  for (const char of prefix) {
    if (!(char in node.charList)) {
      return false;
    }
    node = node.charList[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
