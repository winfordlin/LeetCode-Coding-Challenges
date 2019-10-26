/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// when we find a number i, we flip its position (nums[i]) negative
// if we ever see the number at position i is negative, we know it is a duplicate number

// flipping the numbers negative can give a new boolean[ ] without extra space

var findDuplicates = function(nums) {
  let res = [];
  for (i = 0; i < nums.length; ++i) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }
  return res;
};
