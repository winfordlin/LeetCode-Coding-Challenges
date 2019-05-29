/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/

//Solution 1: Iteration

//Solution 2: Recursion

//Solution 3: Math

const powerofthree = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    while(n % 3 === 0){
        n = n / 3;
    }
    
    return n === 3 || n === 1;
}