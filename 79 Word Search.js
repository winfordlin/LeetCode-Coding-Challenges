/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    word = word.split("");
    
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
                if (dfs(board,word,i,j,0)) return true;
            }
        }
    return false;
};

var dfs = function(board,word,i,j,path){
    
    if (i+1 > board.length || i < 0 || j+1 > board[i].length || j < 0) return false;
    if (board[i][j] !== word[path]) return false;

    if (path === word.length-1) return true;

    //mark as visited
    board[i][j] = '*';
    console.log(board);
    console.log(' ');
    if (dfs(board,word,i-1,j,path+1)) return true;
    if (dfs(board,word,i+1,j,path+1)) return true;
    if (dfs(board,word,i,j-1,path+1)) return true;
    if (dfs(board,word,i,j+1,path+1)) return true;

    //reset
    board[i][j] = word[path];
    return false;
}
