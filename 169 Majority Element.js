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
    if (start === end) return nums[start];

    let middle = parseInt(start+(end-start)/2);

    let leftcount = majority(nums,start,middle);
    let rightcount = majority(nums,middle+1,end);

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
    return count > nums.length/2;
}

console.log(majorityElement([2,2,1,1,1,2,2]))