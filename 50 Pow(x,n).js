/*
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//Fast Power Algorithm 

var myPow = function(x, n) {
    if (n === 0) return 1;

    let pow = Math.abs(n);

    let result = pow % 2 === 0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2)*x;
    
    return n < 0 ? (1/result) : result;
    
};
