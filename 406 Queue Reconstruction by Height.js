/*
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let res = [];
  people.sort((personA, personB) => {
    //sort by height and if height is same, sort by queue
    if (personA[0] === personB[0]) {
      return personA[1] - personB[1];
    } else {
      return personB[0] - personA[0];
    }
  });

  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
  }
  return res;
};
