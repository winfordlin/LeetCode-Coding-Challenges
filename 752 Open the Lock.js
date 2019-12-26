/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

Example 1:
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".
Example 2:
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation:
We can turn the last wheel in reverse to move from "0000" -> "0009".
Example 3:
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation:
We can't reach the target without getting stuck.
Example 4:
Input: deadends = ["0000"], target = "8888"
Output: -1
Note:
The length of deadends will be in the range [1, 500].
target will not be in the list deadends.
Every string in deadends and the string target will be a string of 4 digits from the 10,000 possibilities '0000' to '9999'.
*/

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let q = [target]; // our BFS Queue
  let mem = {}; // to keep track what we already have visited
  mem[target] = 0; // starting distance of the end

  // Helper function that given a position, will generate all the numbers we
  // can create in 1 move;
  let getNextPositions = function(pos) {
    // one above, one below
    let dir = [-1, 1];
    let arr = pos.split("");
    let positions = [];
    let i, j;

    for (j = 0; j < 2; j++) {
      let next = "";
      // for each number in the position
      for (i = 0; i < 4; i++) {
        // logic is not just +1 -1, have to deal with wrapping around
        let n = (10 + parseInt(arr[i], 10) + dir[j]) % 10;
        // clone to not ruin our array for the next number
        let next = [...arr];
        // set our 1 change
        next[i] = n;
        positions.push(next.join(""));
      }
    }
    return positions;
  };

  while (q.length) {
    // dequeue a position to check out
    let pos = q.shift();

    // if it's 0000 we're done. BFS guarantees it's the shortest possible
    if (pos === "0000") {
      return mem[pos];
    } else {
      let next = getNextPositions(pos);
      next.forEach(function(n) {
        // if we haven't seen n before, and it's not a dead end,
        if (mem[n] === undefined && !deadends.includes(n)) {
          // mark the distance and enqueue to check out next
          mem[n] = mem[pos] + 1;
          q.push(n);
        }
      });
    }
  }
  // if we end up here, we couldn't find it
  return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
