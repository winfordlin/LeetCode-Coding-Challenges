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
var subsets = function(nums) {
  let res = [];
  const helper = function(nums, arr, i) {
    if (i === nums.length) {
      res.push(arr);
      return;
    } else {
      helper(nums, arr, i + 1);
      helper(nums, arr.concat(nums[i]), i + 1);
    }
  };

  helper(nums, [], 0);
  return res;
};

console.log(subsets([1, 2, 3]));
