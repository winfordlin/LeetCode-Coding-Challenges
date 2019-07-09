/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?

*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let container = [];

    for(let i = 0; i <= rowIndex; i++){
            container[i] = [];
            
        for(let j = 0; j <= i; j++){
            if (j === 0 || j === i){
                container[i][j] = 1;
            }else {
                container[i][j] = container[i-1][j-1] + container[i-1][j];
            }
        }
    }
    return container[rowIndex];
};
