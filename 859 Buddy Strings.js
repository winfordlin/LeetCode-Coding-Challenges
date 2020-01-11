/*
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

 

Example 1:

Input: A = "ab", B = "ba"
Output: true
Example 2:

Input: A = "ab", B = "ab"
Output: false
Example 3:

Input: A = "aa", B = "aa"
Output: true
Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:

Input: A = "", B = "aa"
Output: false
 

Note:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  //impossible for A and B to be matching strings
  if (A.length !== B.length) return false;

  //count how many off elements in A, keep track of first (i) and second (j) count -> later check A[i] = B[j], A[j] = B[i]
  let first = -1;
  let second = -1;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (first === -1) {
        first = i;
      } else {
        second = i;
      }
      count++;
    }
  }

  //if same string, check if there are duplicates, duplicates needed for swap, "ab" cannot swap into "ba" but "hello" can swap two "l"s into "hello"
  if (count === 0) {
    let findDuplicates = new Set(A);
    return findDuplicates.size < A.length;
  }

  if (count === 2) {
    return A[first] === B[second] && A[second] === B[first];
  }

  //count is more than 2, need more than 1 pair of swap
  return false;
};

//same string
console.log(buddyStrings("hello", "hello"));
//swapped once
console.log(buddyStrings("aaabc", "aaacb"));
//swapped twice
console.log(buddyStrings("aaabcbc", "aaacbcb"));
//no match
console.log(buddyStrings("hello", "nihao"));
