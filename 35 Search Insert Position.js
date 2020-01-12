/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  //binary search for target
  //if not found, left and right will cross over, (left greater than right), return left
  //if out of bounds, left will be arraylength
  return binarySearch(nums, target, 0, nums.length - 1);
};

let binarySearch = function(nums, target, left, right) {
  if (left > right) {
    return left;
  }

  let mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) return mid;

  if (nums[mid] < target) return binarySearch(nums, target, mid + 1, right);

  if (nums[mid] > target) return binarySearch(nums, target, left, mid - 1);
};
