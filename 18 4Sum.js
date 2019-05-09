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
    let pairOfSums = {};
    let quadruplets = [];

    for(let i = 1; i < nums.length-1; i ++){
        for(let j = i + 1; j < nums.length; j++){
            const currentSum = nums[i] + nums[j];
            const difference = target - currentSum;
            if (difference in pairOfSums){
                for(let pair of pairOfSums[difference]){
                    quadruplets.push(pair.concat([nums[i],nums[j]]));
                }
            }
        }
        for(let k = 0; k < i; k++){
            const currentSum = nums[i] + nums[k];
            if (!(currentSum in pairOfSums)){
                pairOfSums[currentSum] = [[nums[k],nums[i]]];
            }else {
                pairOfSums[currentSum].push([nums[k],nums[i]]);
            }
        }
    }
    return quadruplets;
}

console.log(fourSum([1, 0, -1, 0, -2, 2],0))