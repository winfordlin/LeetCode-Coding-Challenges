/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:

Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true
Example 2:

Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  //create mapping
  const AdjList = new Map();
  for (let i = 0; i < n; i++) {
    AdjList.set(i, []);
  }

  //create adjacency matrix
  for (let i = 0; i < edges.length; i++) {
    AdjList.get(edges[i][0]).push(edges[i][1]);
    AdjList.get(edges[i][1]).push(edges[i][0]);
  }

  let visited = new Set();

  function hasCycle(curr, parent) {
    //add node to visited
    visited.add(curr);
    //traverse neighbors
    for (let neighbor of AdjList.get(curr)) {
      //new
      if (!visited.has(neighbor)) {
        //check to see if nonexplored node has a cycle, if so exit recursion
        if (hasCycle(neighbor, curr)) return true;
      } else {
        //seen, must be a parent or else cycle
        if (neighbor !== parent) return true;
      }
    }
    return false;
  }

  if (hasCycle(0, -1)) {
    return false;
  }

  //checked for unconnected components
  return visited.size === n;
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4]
  ])
);
