/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  let ans = [];
  //push lower and upper into array
  if (nums[0] !== lower) nums.unshift(lower - 1);
  if (nums[nums.length - 1] !== upper) nums.push(upper + 1);

  for (let i = 1; i < nums.length; i++) {
    //same number or in range (+1)
    if (nums[i] === nums[i - 1] || nums[i - 1] + 1 === nums[i]) continue;
    if (nums[i - 1] + 1 === nums[i] - 1) {
      ans.push(`${nums[i - 1] + 1}`);
    } else {
      ans.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }
  return ans;
};
