/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = function(nums) {
    return majority(nums,0,nums.length-1)
};

const majority = (nums,start,end) => {
    //base case if elements are the same
    if (nums[start] === nums[end]) return nums[start]

    let middle = nums.length/2;

    let leftcount = majority(nums,start,middle-1);
    let rightcount = majority(nums,middle,end);

    if (checkMajority(nums,leftcount)) return leftcount;
    if (checkMajority(nums,rightcount)) return rightcount;

    return -1;
}

function checkMajority(nums,n){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] === n){
            count++;
        }
    }
    return count;
}