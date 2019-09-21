/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

//dfs a graph using recursion
var numIslands_DFS_Recursion = function(grid) {
    if (grid === null || grid.length === 0) return null;
    let numofIslands = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1'){
                numofIslands += dfs(grid,i,j);
            }
        }
    }
    return numofIslands;
};

//goal of this is to flip the adjacent elements into 0
function dfs(grid,i,j){
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") return 0;
    grid[i][j] = '0';

    dfs(grid,i+1,j);
    dfs(grid,i-1,j);
    dfs(grid,i,j+1);
    dfs(grid,i-1,j);

    return 1;
}

//dfs a graph using stacks
var numIslands_DFS = function(grid) {
    if (grid === null || grid.length === 0) return null;
    let numofIslands = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if (grid[i][j] === '1'){
                numofIslands++;
                let stack = [];
                stack.push([i,j]);
                while (stack.length){
                    let x = stack.pop();
                    if (grid[x[0]][x[1]] === '0') continue;
                    grid[x[0]][x[1]] = '0';
                    if (x[1]+1 < grid[x[0]].length){
                        stack.push([x[0],x[1]+1]);
                    }
                    if (x[1]-1 >= 0){
                        stack.push([x[0],x[1]-1]);
                    }
                    if (x[0]-1 >= 0){
                        stack.push([x[0]-1,x[1]]);
                    }
                    if (x[0]+1 < grid.length){
                        stack.push([x[0]+1,x[1]]);
                    }
                }
            }
        }
    }
    return numofIslands;
};

//bfs a graph using recursion

//bfs a graph using queues

console.log(numIslands_DFS([
    ['1','0','0','0','1'],
    ['1','1','1','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','0','1']
]))

//0,1
//1,0
//