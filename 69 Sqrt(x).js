/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */

//iterative binary search
var mySqrt = function(x) {
  //cut search space into x/2 because cannot be answer is at least x/2, eg. x * x = num
  let l = 1;
  let r = x;

  while (l <= r) {
    let mid = Math.floor(l + r / 2);
    let sq = Math.pow(mid, 2);
    if (sq === x) {
      return sq;
    } else if (sq < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r;
};

console.log(mySqrt(8));
