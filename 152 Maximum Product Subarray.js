/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let localmax = 1;
  let localmin = 1;
  let globalmax = -Infinity;
  for (let i = 0; i < nums.length; i++) {

    //BE CAREFUL - using let causes bugs because localmin will reach and compare the same-iteration-localmax
    [localmax, localmin] = [
      Math.max(nums[i], nums[i] * localmax, nums[i] * localmin),
      Math.min(nums[i], nums[i] * localmax, nums[i] * localmin),
    ];
    
    globalmax = Math.max(globalmax, localmax);
  }
  return globalmax;
}

