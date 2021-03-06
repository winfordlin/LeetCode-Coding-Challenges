/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;

  let dp = new Array(nums.length).fill(1);
  let maxAns = 1;

  for (let i = 1; i < dp.length; i++) {
    let maxVal = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxVal = Math.max(dp[j] + 1, maxVal);
      }
    }
    dp[i] = maxVal;
    maxAns = Math.max(dp[i], maxAns);
  }
  return maxAns;
};
