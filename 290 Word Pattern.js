/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let strArr = str.split(" ");

  //build an reusable Map function, map both str and pattern

  var buildMap = function(a, b) {
    let obj = {};

    for (let i = 0; i < a.length; i++) {
      let key = a[i];
      let value = b[i];

      if (!obj[key]) {
        obj[key] = value;
      }

      if (obj[key] !== value) {
        return false;
      }
    }
    return true;
  };

  if (pattern.length !== strArr.length) {
    return false;
  }

  return buildMap(pattern, strArr) && buildMap(strArr, pattern);
};
