/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let key = sortString(strs[i]);
    let anagramList = map[key] || [];
    anagramList.push(strs[i]);
    map[key] = anagramList;
  }

  return Object.values(map);
};

let sortString = strs => {
  return strs
    .split("")
    .sort()
    .join("");
};
