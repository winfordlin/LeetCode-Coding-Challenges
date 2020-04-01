/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

const spiral = (matrix) => {
    //traverse the perimeter by 
    //keeping track of starting row, ending row, starting column, and ending column

    let res = []

    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        //top row
        for (let i = startCol; i <= endCol; i++) {
            res.push(matrix[startRow][i])
        }

        //left col
        for (let i = startRow + 1; i <= endRow; i++) {
            res.push(matrix[i][endCol]);
        }

        //bottom row
        for (let i = endCol - 1; i >= startCol; i--) {
            if (startRow === endRow) {
                break;
            }
            res.push(matrix[endRow][i]);
        }

        //right col
        for (let i = endRow - 1; i > startRow; i--) {
            if (startCol === endCol) {
                break;
            }
            res.push(matrix[i][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    return res;
}
