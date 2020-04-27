/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/


/**
 * @param {character[][]} matrix
 * @return {number}
 */

//create an dp matrix with input matrix's first row and col
//dp matrix input is minimum of top-left, top, top-left & right
// intuition: squares of 1 can be pushed out to [1][1]
//                                              [1][**2**]
//advanced: only cache two rows at a time

var maximalSquare = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return 0;
    }

    const m = matrix.length;
    const n = matrix[0].length;

    //fill first row with given matrix & change from char to integer
    let dp = matrix[0].slice().map((c) => parseInt(c));
    let max = Math.max(...dp);
    for (let i = 1; i < m; i++) {
        const next = new Array(n).fill(0);
        next[0] = parseInt(matrix[i][0]);
        for (let j = 1; j < n; j++) {
            next[j] = matrix[i][j] === '1' ? Math.min(next[j - 1], dp[j], dp[j - 1]) + 1 : 0;
        }
        dp = next;
        max = Math.max(max, ...dp);
    }
    return max ** 2;
};
