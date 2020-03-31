/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    //return max average
    let total = 0;
    let average;
    let maximumAverage;

    //calculate average
    let i = 0
    while (i < k) {
        total += nums[i]
        i++;
    }

    average = total / k;
    maximumAverage = average;

    while (i < nums.length) {
        total += nums[i];
        total -= nums[i - k];
        average = total / k;
        maximumAverage = Math.max(maximumAverage, average);
        i++;
    }
    return maximumAverage;
};
