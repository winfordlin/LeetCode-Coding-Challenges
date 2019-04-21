/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

/**
 * @param {string} s
 * @return {number}
 */

//Solution 1
var firstUniqChar = function(s) {
    let obj = {};
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = ++obj[s[i]] || 1;
    }

    for(let char in obj){
        if (obj[char] === 1){
            return s.indexOf(char);
        }
    }
    return -1;
};
