/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    //create matrix 
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(new Array(n).fill(0));
    }

    //traverse parameters using startRow, endRow, startCol, endCol
    let startRow = 0;
    let endRow = n - 1;

    let startCol = 0;
    let endCol = n - 1;

    //num
    let idx = 1;
    while (startRow <= endRow && startCol <= endCol) {
        //top row
        for (let i = startCol; i <= endCol; i++) {
            res[startRow][i] = idx;
            idx++;
        }
        //right column
        for (let i = startRow + 1; i <= endRow; i++) {
            res[i][endCol] = idx;
            idx++;
        }
        //bottom row
        for (let i = endCol - 1; i >= startCol; i--) {
            if (startRow === endRow) break;
            res[endRow][i] = idx;
            idx++;
        }
        //left column
        for (let i = endRow - 1; i > startRow; i--) {
            if (startCol === endCol) break;
            res[i][startCol] = idx;
            idx++;
        }
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }

    return res;
};

