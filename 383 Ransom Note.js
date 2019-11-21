/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

//frequency counters

var canConstruct = function(ransomNote, magazine) {
  let magazineFreq = {};

  for (let i = 0; i < magazine.length; i++) {
    magazineFreq[magazine[i]] = ++magazineFreq[magazine[i]] || 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineFreq[ransomNote[i]]) {
      return false;
    } else {
      magazineFreq[ransomNote[i]]--;
    }
  }
  return true;
};

var canConstructSorted = function(ransomNote, magazine) {
  let ransomNoteSorted = ransomNote
    .split("")
    .sort()
    .join("");
  let magazineSorted = magazine
    .split("")
    .sort()
    .join("");

  let i = 0;
  let j = 0;
  while (i < ransomNoteSorted.length) {
    if (ransomNoteSorted[i] === magazineSorted[j]) {
      i++;
      j++;
    } else {
      if (magazineSorted[j]) {
        j++;
      } else {
        return false;
      }
    }
  }
  return true;
};
