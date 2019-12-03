/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  //check to see if 1 is present if not return 1
  //switch all numbers not in range (1 to num length) to 1
  //flip integers negative based on their position i
  //loop and return the first positive integer

  let noOnes = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      noOnes = false;
    }
  }

  if (noOnes) return 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1 || nums[i] > nums.length) {
      nums[i] = 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let abs = Math.abs(nums[i]);
    nums[abs - 1] = -1 * Math.abs(nums[abs - 1]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};
