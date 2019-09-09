/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = new Array(nums.length-1).fill(1);
    let p = 1;
    for(let i = 0; i < nums.length; i++){
        output[i] = p;
        p = p * nums[i];
    }

    p = 1;

    for(let i = nums.length-1; i >= 0; i--){
        output[i] *= p;
        p = p * nums[i];
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4]));