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
        if(!matrix.length)
            return [];
        
        const numberOfRows = matrix.length;
        const numberOfColumns = matrix[0].length;
        
        let startRow = 0;
        let startColumn = 0;
        let endRow = numberOfRows - 1;
        let endColumn = numberOfColumns - 1;
        
        let result = [];
        
        while(startRow <= endRow && startColumn <= endColumn) {
            startRow = printTheFirstRow(matrix, startRow, startColumn, endColumn, result);
            endColumn = printTheLastColumn(matrix, startRow, endRow, endColumn, result);
            if (startRow <= endRow) {
                endRow = printTheLastRow(matrix, endRow, startColumn, endColumn, result);
            }
            if(startColumn <= endColumn) {
               startColumn = printTheFirstColumn(matrix, endRow, startRow, startColumn, result);
            }
        }
        
        return result;
    };
    
    const shouldPrint = (startRow, startColumn, endRow, endColumn) => {
        return startRow <= endRow && startColumn <= endColumn;
    }
    
    const printTheFirstRow = (matrix, startRow, startColumn, endColumn, result) => {
        for(let i = startColumn; i <= endColumn; ++i) {
            result.push(matrix[startRow][i]);
        }
        
        return startRow + 1;
    }
    
    const printTheLastColumn = (matrix, startRow, endRow, endColumn, result) => {
        for(let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endColumn]);
        }
        
        return endColumn - 1;
    }
    
    const printTheLastRow = (matrix, endRow, startColumn, endColumn, result) => {
        for(let i = endColumn; i >= startColumn; --i) {
            result.push(matrix[endRow][i]);
        }
        
        return endRow - 1;
    }
    
    const printTheFirstColumn = (matrix, endRow, startRow, startColumn, result) => {
        for(let i = endRow; i >= startRow; --i) {
            result.push(matrix[i][startColumn]);
        }
        
        return startColumn + 1;
    }
