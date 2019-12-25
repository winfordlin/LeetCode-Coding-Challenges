/*
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:

Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
Example 2:

Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.
Note:

1 <= rooms.length <= 1000
0 <= rooms[i].length <= 1000
The number of keys in all rooms combined is at most 3000.
*/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

class Graph {
  constructor(numofvertices) {
    this.numofvertices = numofvertices;
    this.AdjList = new Map();
  }

  addVertice(v) {
    this.AdjList.set(v, []);
  }

  addEdges(v, w) {
    this.AdjList.get(v).push(w);
  }

  dfs(startingnode, output) {
    let stack = [];
    let visited = {};

    stack.push(startingnode);
    visited[startingnode] = true;

    while (stack.length) {
      let current = stack.pop();
      let neighbors = this.AdjList.get(current);
      visited[current] = true;

      output.push(current);

      neighbors.forEach(neighbor => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }
}
var canVisitAllRooms = function(rooms) {
  //visit as many rooms using keys accessible from room 0: DFS
  let stack = [];
  let visited = {};

  stack.push(0);
  visited[0] = true;

  while (stack.length > 0) {
    let current = stack.pop();
    let neighbors = rooms[current];

    for (let i = 0; i < neighbors.length; i++) {
      if (!visited[neighbors[i]]) {
        stack.push(neighbors[i]);
        visited[neighbors[i]] = true;
      }
    }
  }

  // see if the number visited is equal to the number of rooms
  return Object.keys(visited).length === rooms.length;
};
