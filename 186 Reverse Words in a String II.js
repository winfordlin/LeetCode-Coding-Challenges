/*
Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Note: 

A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces.
The words are always separated by a single space.
Follow up: Could you do it in-place without allocating extra space?
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
    //get reversed string
    let reverseStr = s.join('').split(' ').reverse().join(' ').split('');

    //reset s into reversed string, reseting the length keeps the memory address vs initializing a new array and assigning that to s
    s.length = 0;

    for (var i = 0; i < reverseStr.length; i++) {
        s.push(reverseStr[i]);
    }
};
