/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
Note:

Your solution should be in logarithmic complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  //binary search template 2, access index and index's right element
  let l = 0;
  let r = nums.length - 1;

  //when cannot compare one side
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid + 1] > nums[mid]) {
      //uphill
      l = mid + 1;
    } else if (nums[mid + 1] < nums[mid]) {
      //downhill
      r = mid;
    }
  }
  return l;
};
