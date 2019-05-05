/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
  if (nums.length < 3) return res;
  nums.sort((a,b) => {return a - b});
  for(let i = 0; i < nums.length-2; i++){
    let left = i + 1, right = nums.length - 1, target = 0;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
		
    while (left < right){
      let currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === target){
        res.push([nums[i],nums[left],nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }else if (currentSum < target){
        left++;
      }else {
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
