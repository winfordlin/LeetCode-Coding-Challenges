/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  //edge case
  if (nums.length === 0) return [];
  function recurse(index, tempArr) {
    //base case
    if (index === nums.length) {
      //3. backtracking
      result.push(tempArr);
      return;
    }
    for (let idx of nums) {
      //1. choose
      if (!tempArr.includes(idx)) {
        let newArr = tempArr.concat(idx);
        //2. explore
        recurse(index + 1, newArr);
      }
    }
  }

  recurse(0, []);
  return result;
};

console.log(permute([1, 2, 3]));
