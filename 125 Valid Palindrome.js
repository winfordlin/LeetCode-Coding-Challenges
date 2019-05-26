/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome1 = (s) => {
    let strArr = s.replace(/[^a-z0-9]/gi,'').toLowerCase().split('');
    let left = 0;
    let right = strArr.length-1;
    
    while(left < right){
        if (strArr[left] === strArr[right]){
            left++;
            right--;
        }else {
            return false;
        }
        
    }
    return true;
}



















/*

var isPalindrome = function(s) {
    let arr = s.replace(/[^a-z0-9]/gi,'').toLowerCase().split('');
    let l = 0;
    let r = arr.length-1;

    while(l <= r){
        if (arr[l] !== arr[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};


*/