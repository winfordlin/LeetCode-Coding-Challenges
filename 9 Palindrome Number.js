/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) return false;
    let arr = x.toString().split("");
    let left = 0;
    let right = arr.length-1;

    while (left <= right){
        if (arr[left] !== arr[right]) return false; 
        left++;
        right--;
    }
    return true;
};