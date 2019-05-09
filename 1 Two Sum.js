/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//Solution 1 - Time O(N) Space O(N) beats 99% of runtime

const tSUM = (arr, target) => {
    let pair = {};
    for(let i = 0; i < arr.length;i++){
        let difference = target - arr[i];
        if (difference in pair){
            return [pair[difference], i]
        }else {
            pair[arr[i]] = i; 
        }
    }
}

//Solution 2 - Time Space O(N^2) beats 97% of memory 
const twoSUM = (arr, target) => {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        const difference = target - arr[i];
        const index = arr.indexOf(difference,i+1);
        if (index > 0){
            res = [i,index];
            break;
        }
    }
    return res;
}
