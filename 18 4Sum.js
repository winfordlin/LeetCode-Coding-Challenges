/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = {};
    let ret = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length;j++){
            let currentSum = nums[i] + nums[j];
            let difference = target - currentSum;
            if (difference in res){
                
            }
        }
    }
        console.log(res);
}

console.log(fourSum([1, 0, -1, 0, -2, 2]))