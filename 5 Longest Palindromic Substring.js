/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  //set a start index (will return a slice of start index + maxLength)
  //set a maxLength
  //expand around center with even and odd length palindromes
  //keep track of current maxLength and start index.

  let startIndex = 0;
  let maxLength = 1;

  function expandAroundCenter(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      let curlength = r - l + 1;
      if (curlength > maxLength) {
        startIndex = l;
        maxLength = curlength;
      }
      l--;
      r++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
};
