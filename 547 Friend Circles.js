/*
There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

Example 1:
Input: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle. 
The 2nd student himself is in a friend circle. So return 2.
Example 2:
Input: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
Note:
N is in range [1,200].
M[i][i] = 1 for all students.
If M[i][j] = 1, then M[j][i] = 1.
*/

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  //create visited array to mark visited
  //iterate through the matrix and process 1's (direct friendships) into bfs queue
  //increment count after each emptying of stack (no direct friendships or indirect friendships - 1's of neighbors -  to process)

  let q = [];
  let visited = new Array(M.length).fill(0);
  let count = 0;

  let m = M.length;
  if (!m) return count;
  let n = M[0].length;

  for (let i = 0; i < m; i++) {
    if (visited[i] === 0) {
      q.push(i);
      while (q.length) {
        let s = q.shift();
        visited[s] = 1;
        for (let j = 0; j < n; j++) {
          if (visited[j] === 0 && M[s][j] === 1) {
            q.push(j);
          }
        }
      }
      count++;
    }
  }
  return count;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
);
