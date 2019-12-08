/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let intStack = [];
  let charStack = [];
  let i = 0;

  while (s[i]) {
    if (s[i].charCodeAt() <= 57 && s[i].charCodeAt() >= 49) {
      let int = [];

      while (s[i].charCodeAt() <= 57 && s[i].charCodeAt() >= 48) {
        int.push(parseInt(s[i]));
        i++;
      }

      intStack.push(int.join(""));
    }

    //end of encoding
    if (s[i] === "]") {
      let num = intStack.pop();
      let temp = [];
      let pop = charStack.pop();

      //build character
      while (pop !== "[") {
        temp.unshift(pop);
        pop = charStack.pop();
      }

      //multiply
      let mult = [];
      while (num) {
        mult = mult.concat(temp);
        num--;
      }

      //concat to main charStack
      charStack = charStack.concat(mult);
    } else {
      //char, not bracket or number
      charStack.push(s[i]);
    }

    i++;
  }

  return charStack.join("");
};
