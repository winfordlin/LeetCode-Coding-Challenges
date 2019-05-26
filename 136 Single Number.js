/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

//Naive Solution: RunTime O(N) Space O(N)
const singleNumber = (nums) => {
    let objFreq = {}
    for(let i = 0; i < nums.length; i++){
        objFreq[nums[i]] = ++objFreq[nums[i]] || 1;
    }

    for(keys in objFreq){
        if (objFreq[keys] === 1){
            return keys;
        }
    }
}

//Sort Solution RunTime O(n logn) Space O(N)
const singleNumber2 = (nums) => {
    nums.sort((a,b) => {return a - b});
    for(let i = 0; i < nums.length; i+=2){
        if (nums[i] !== nums[i+1]){
            return nums[i];
        }
    }
}

//Math Solution RunTime O(n) Space O(n)
const singleNumber3 = (nums) => {
    let sum = 0;
    let numSetSum = 0;
    let numSet = new Set(nums);

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    
    for(nums of numSet){
        numSetSum += nums;
    }
    return (2*numSetSum) - sum;
}
console.log(singleNumber3([4,1,2,1,2]))


