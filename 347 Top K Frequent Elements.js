/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //create object frequency
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = ++map[nums[i]] || 1;
  }

  //put into array
  let array = [];
  for (const obj in map) {
    array.push({ obj, count: map[obj] });
  }

  //sort and return number sliced for 0 to k
  array.sort((a, b) => b.count - a.count);
  return array.slice(0, k).map(num => parseInt(num.obj));
};
