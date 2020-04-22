/*
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    //store continous sums, finding an opposite "pair" (sum-k) means there is a subarray
    const freq = { 0: 1 };
    let nSubarrs = 0;
    let sum = 0;
    for (const num of nums) {
        sum += num;
        //if can make a opposite pair, technically is a subarray
        nSubarrs += freq[sum - k] || 0;
        //store either the new instance or add onto freq of prev instance
        freq[sum] = (freq[sum] || 0) + 1;
    }
    return nSubarrs;
};