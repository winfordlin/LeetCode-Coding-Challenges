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
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = ++obj[nums[i]] || 1;
    }

    for (num in obj){
        if (obj[num] === 1){
            return num.toString();
        }
    }
}

//Solution 2: Runtime O(n log n) Space O(1)

const singleNumber2 = (nums) => {
    nums.sort((a,b) => {return a - b});
    for(let i = 0; i < nums.length; i+=2){
        if (nums[i] !== nums[i+1]){
            return nums[i];
        }
    }
}

