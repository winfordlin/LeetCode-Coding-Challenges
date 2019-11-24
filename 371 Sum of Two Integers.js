/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  while (b !== 0) {
    let carry = a & b; //carry
    a = a ^ b; //addition
    b = carry << 1;
  }
  return a;
  //declare a variable - amount of carry
  //declare a variable - amount after addition
  //perform the & function that determines the amount of carry
  //perform the ^ function that adds the two binaries
  //perform the << left shift function that moves the carry
  //perform the ^ function on the carry and the added function
  //repeat process until there are no carries
};
