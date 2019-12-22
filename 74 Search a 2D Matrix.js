/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  //binary search
  let n = matrix[0].length;
  let m = matrix.length;
  let l = 0;
  let r = n * m - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    //column
    let elem = matrix[Math.floor(mid / n)][mid % n];
    if (elem === target) {
      return true;
    } else if (elem < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
};
