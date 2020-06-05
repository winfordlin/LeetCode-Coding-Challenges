/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  function recurse(index, tempArr) {
    //1. push result
    result.push(tempArr.slice());
    //2. choose
    for (let i = index; i < nums.length; i++) {
      //3. explore
      tempArr.push(nums[i]);
      recurse(i + 1, tempArr);
      //4. unchoose (backtrack)
      tempArr.pop();
    }
  }

  recurse(0, []);
  return result;
};
