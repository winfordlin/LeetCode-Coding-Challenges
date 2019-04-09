/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function(strs){
    if (!strs.length) return '';
    for(let i = 0; i < strs[0].length; i++){
        for(char of strs[0]){
            if (char === strs[0][i]){

            }
    }
    }
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
