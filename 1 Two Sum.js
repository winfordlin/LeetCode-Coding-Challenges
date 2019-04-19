/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//Solution 1 - Time O(N) Space O(N) 

const twoSum = (nums,target) => {
    let obj = {};

    for(let i = 0; i < nums.length; i++){
        
        if (obj[target - nums[i]]){
            return [parseInt(obj[target-nums[i]]),i]
        } else {
            obj[nums[i]] = i.toString();
        }  
    }   
    return res;
}


console.log(twoSum())

