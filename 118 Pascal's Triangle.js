/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

const numRows = (number) => {
    let solution = [];
    for(let i = 0; i < number; i++){
        solution[i] = [];
        for(let j = 0; j <= i; j++){
            if (j === 0 || j === i){
                solution[i][j] = 1;
            }else {
                solution[i][j] = solution[i-1][j-1] + solution[i-1][j];
            }
        }
    }
    return solution;
}

