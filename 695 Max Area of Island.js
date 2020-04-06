/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    //linear scan for islands,
    //bfs island, increment local count, keep track of max count

    let maxCount = 0;

    //linear scan
    let m = grid.length;
    if (!m) return 0;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let localCount = bfs(i, j, grid);
                maxCount = Math.max(localCount, maxCount);
            }
        }
    }

    return maxCount;
};

function bfs(i, j, grid) {
    let q = [];
    let count = 0;

    let dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    grid[i][j] = -1;

    q.push([i, j]);

    while (q.length) {
        count++;
        let current = q.pop();
        let r = current[0];
        let c = current[1];

        for (let i = 0; i < dir.length; i++) {
            let row = r + dir[i][0];
            let col = c + dir[i][1];

            if (row < 0 ||
                row >= grid.length ||
                col < 0 ||
                col >= grid[0].length ||
                grid[row][col] === 0 ||
                grid[row][col] === -1) {
                continue;
            }
            grid[row][col] = -1;
            q.push([row, col]);
        }
    }

    return count;
}
