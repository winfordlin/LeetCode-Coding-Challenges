/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    //bfs
    //start with n
    //next "level" of tree is n - all its range of perfect squares, see example below
    //next "level" after that is those numbers - all of its range of perfect squares 
    //continue until reach perfect square, which means it takes the height of the tree to sum up to n
    let q = [[n, 1]]
    let visited = new Set();

    while (q.length) {
        let current = q.shift();
        let num = current[0];
        let level = current[1];
        let sqrt = Math.floor(Math.sqrt(num));

        if (num === sqrt * sqrt) {
            return level;
        }

        for (let i = sqrt; i >= 1; i--) {
            const remainder = num - (i * i);
            if (!visited.has(remainder)) {
                q.push([remainder, level + 1]);
                visited.add(remainder);
            }
        }
    }
};

//example answer for 12
/*
perfsqre =  [9 , 4 , 1]
                12
                |
            9   8   11
          /     |      \
        3       4        10

        4 is a perfect number, return level
*/
