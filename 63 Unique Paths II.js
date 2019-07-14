/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    for(var i=0;i<obstacleGrid.length;i++){
        for(var j=0;j<obstacleGrid[0].length;j++){
            if(obstacleGrid[i][j] == 1)
                obstacleGrid[i][j] = 0
            else if(i==0&&j==0)
                obstacleGrid[0][0] = 1;
            else
                obstacleGrid[i][j] = (i>0? obstacleGrid[i-1][j] : 0) + (j>0 ? obstacleGrid[i][j-1] :0)
        }
    }
    return obstacleGrid[obstacleGrid.length -1][obstacleGrid[0].length-1];
};
