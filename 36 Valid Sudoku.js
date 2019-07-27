/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let i = 0; i < 9; i++){
        if (!checkRow(board[i])) return false;
        if (!checkCol(board,i)) return false;
    }
    if (!checkSubMatrix(board)) return false;
    return true;
};

function checkRow(arr){
    let hashmap = {};
    for(let i = 0; i < 9; i++){
        if (arr[i] !== "."){
            hashmap[arr[i]] = ++hashmap[arr[i]] || 1;
            if (hashmap[arr[i]] > 1) return false;
            }
        }
        return true;
}

function checkCol(arr,col){
    let hashmap = {};
    for(let i = 0; i < 9; i++){
        if (arr[i][col] !== "."){
            hashmap[arr[i][col]] = ++hashmap[arr[i][col]] || 1;
            if (hashmap[arr[i][col]] > 1) return false;
        }
    }
    return true;
}

function checkSubMatrix(arr){
    for(let row = 0; row < 9; row+=3){
        for(let col = 0; col < 9; col+=3){
            let hashmap = {};
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if (arr[i+row][j+col] !== "."){
                        hashmap[arr[i+row][j+col]] = ++hashmap[arr[i+row][j+col]] || 1;
                        if (hashmap[arr[i+row][j+col]] > 1) return false;
                    }
                }
            }
        }
    }
    return true;
}
    

