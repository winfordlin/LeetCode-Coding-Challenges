/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. 
If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

*/


//O(n)

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let min = Number.MAX_VALUE;
    let r = -1;
    let l = 0;
    let total = 0;

    while(r < nums.length){
        if (total >= s){
            min = Math.min(min,r-l+1);
            total -= nums[l];
            l++;
        }else {
            r++;
            total += nums[r];
        }
    }

    return min === Number.MAX_VALUE ? 0: min;
};
