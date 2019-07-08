/*
Given an input string, reverse the string word by word.

Example 1:

Input: "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Note:

A word is defined as a sequence of non-space characters.
Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string.
 
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = " ";
    let stringarr = s.split(' ');
    console.log(stringarr)
    for(let i = stringarr.length-1; i >= 0; i--){
        if (stringarr[i] !== ''){
            word += `${stringarr[i]} `
        }
    }
    return word.slice(1,word.length-1);
};
