/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
*/

/**
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function(s) {
  let total = 0;

  let i = 0;
  while (s[i]) {
    let carry = Math.pow(26, s.length - 1 - i);
    total += carry * (s[i].charCodeAt() - 64);
    i++;
  }

  return total;
};
