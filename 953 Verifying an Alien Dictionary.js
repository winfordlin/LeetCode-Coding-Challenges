/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  for (let i = 1; i < words.length; i++) {
    let firstWord = words[i - 1];
    let secondWord = words[i];
    for (let i = 0; i < Math.min(firstWord.length, secondWord.length); i++) {
      if (checkDictionary(firstWord[i], secondWord[i], order) === 1) {
        break;
      } else if (checkDictionary(firstWord[i], secondWord[i], order) === 0) {
        continue;
      } else if (checkDictionary(firstWord[i], secondWord[i], order) === -1) {
        return false;
      }
    }
  }

  return true;
};

var checkDictionary = function(a, b, order) {
  let firstChar = 0;
  let secondChar = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i] === a) {
      firstChar = i;
    } else if (order[i] === b) {
      secondChar = i;
    }
  }

  if (firstChar < secondChar) {
    return 1;
  } else if (firstChar === secondChar) {
    return 0;
  } else {
    return -1;
  }
};
