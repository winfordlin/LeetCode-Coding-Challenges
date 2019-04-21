/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
//[0,1,3]
Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/


//Solution 1: Time O(N) Space O(N) //Edge Cases not passed 

var missingNumber = function(nums) {
    let arr = new Array(nums.length);
    arr.fill(false);
    
    for(let i = 0; i < nums.length; i++){
        arr[nums[i]] = true;
    }
    
    for(let i = 0; i < nums.length; i++){
        if(arr[i] === false){
            return i;
        }
    }
};

//Solution 2: Time O(n log n) Space O(1)//Edge Cases not passed

var missingNumber2 = function(nums) {
    nums.sort((a,b) => { return a - b});

    for(let i = 0; i < nums.length; i++){
        let addOne = nums[i]+1;
        if (addOne !== nums[i+1]){
            return addOne;
        }
    }
};


//Solution 3: Time O(N) Space O(1)
//n(n+1)/2 Gauses Formula


var missingNumber3 = function(nums) {
    let totalCount = (nums.length * (nums.length+1)) / 2;

    for(let i = 0; i < nums.length; i++){
        totalCount -= nums[i];
    }
    return totalCount;
};
