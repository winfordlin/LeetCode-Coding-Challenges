/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

Example: 

Given the 2D grid:

INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
After running your function, the 2D grid should be:

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
*/

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  //linear scan matrix for gates, placing them into bfs queue
  //because we know bfs moves from k to k + 1 steps, we can be sure the regions
  //near the gates that are processed first are the closests, etc

  let EMPTY = 2147483647;
  let GATE = 0;
  let q = [];

  let m = rooms.length;
  if (!m) return;
  let n = rooms[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === GATE) {
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
      let row = dir[i][0] + r;
      let col = dir[i][1] + c;
      if (
        row < 0 ||
        row >= m ||
        col < 0 ||
        col >= n ||
        rooms[row][col] !== EMPTY
      ) {
        continue;
      }
      rooms[row][col] = rooms[r][c] + 1;
      q.push([row, col]);
    }
  }
};
