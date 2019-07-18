/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    
    let res = "";
    let i = 0;
    while (i < str.length){
        if (str.charCodeAt(i) < 91 && str.charCodeAt(i) > 64){
            res += String.fromCharCode(str.charCodeAt(i)+32);
        }else {
            res += str[i];
        }
        i++;
    }
    return res;
};

