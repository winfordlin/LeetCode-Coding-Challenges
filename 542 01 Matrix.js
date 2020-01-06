/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let m = matrix.length;
  if (!m) return;
  let n = matrix[0].length;
  let q = [];
  //create 2D array
  let ret = create2DArray(m, n);

  //put 0s in queue for processing
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        ret[i][j] = 0;
        q.push([i, j]);
      }
    }
  }

  let dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1]
  ];

  while (q.length) {
    let current = q.shift();
    let r = current[0];
    let c = current[1];
    for (let i = 0; i < dir.length; i++) {
      let row = r + dir[i][0];
      let col = c + dir[i][1];
      if (row < 0 || col < 0 || col >= n || row >= m) {
        continue;
      }
      if (ret[row][col] > ret[r][c]) {
        ret[row][col] = ret[r][c] + 1;
        q.push([row, col]);
      }
    }
  }
  return ret;
};

let create2DArray = function(m, n) {
  let ret = [];
  for (let i = 0; i < m; i++) {
    ret[i] = [];
    for (let j = 0; j < n; j++) {
      ret[i][j] = Infinity;
    }
  }

  return ret;
};
