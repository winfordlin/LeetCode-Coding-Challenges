/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1
Given N, calculate F(N).

*/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let a = 0;
    let b = 1;

    while (n > 0){
      let c = a;
      a = b;
      b = c + a;
      N--;
    }
    return a;
};