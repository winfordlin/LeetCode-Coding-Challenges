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

  function recurse(index, tempArr) {
    if (index === nums.length) {
      result.push(tempArr);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      //3. backtracking condition
      if (!tempArr.includes(nums[i])) {
        //1. choose
        let newArr = tempArr.concat(nums[i]);
        //2. explore
        recurse(index + 1, newArr);
      }
    }
  }
  recurse(0, []);
  return result;
};

console.log(permute([1, 2, 3]));
