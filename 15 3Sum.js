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

    nums.sort((a,b) => {return a - b});
    //[-4,-1,-1,0,1,2]
    for(let i = 0; i < nums.length; i++){

      let difference = 0 - nums[i];
      let l = 0;
      let r = nums.length-1;
      let res1 = [];
      if (i > 0 && nums[i] === nums[i - 1]) continue
      while(l < r){

        if(nums[l] === nums[i]){
          l++;
        } else if (nums[r] === nums[i]){
          r--;
        } else if (nums[l] + nums[r] === difference){
          res1.push(nums[l]);
          res1.push(nums[i]);
          res1.push(nums[r]);
          res1.sort((a,b) => {return a - b});
          res.push(res1);
          break;
        } else if (nums[l] + nums[r] < difference){
          l++;
        } else if (nums[l] + nums[r] > difference){
          r--;
        }
      }
    }
    let resz = Array.from(new Set(res));
    return resz; 
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));


