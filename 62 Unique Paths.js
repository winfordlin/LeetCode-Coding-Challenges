/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let array = new Array(m+1);
    for(let i = 0; i < array.length; i++){
        array[i] = new Array(n+1).fill(1);
    }

    for(let i = 1; i < array.length; i++){
        let memo = array[i];
        for(let j = 1; j < memo.length; j++){
            array[i][j] = array[i][j-1] + array[i-1][j];
        }
    }
    return array[m-1][n-1];
};
