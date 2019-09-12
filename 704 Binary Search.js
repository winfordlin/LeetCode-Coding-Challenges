/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //Recursive Solution Time O(log n) Space O(log n)
var search = function(nums, target) {
    return binarySearch(nums,target,0,nums.length-1);
};

var binarySearch = function(nums, target, left, right){
    if (left > right) return -1
    let mid = Math.floor((left+right)/2);
    
    let middle = nums[mid];
    if (target === middle){
        return mid;
    }else if (target < middle){
        return binarySearch(nums,target,left,mid-1)
    }else {
        return binarySearch(nums,target,mid+1,right);
    }
}

// Iterative Solution Time O(log n) Space O(1)

var searchIterative = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right){
        let mid = left + Math.floor((right-left)/2);
        
        if (nums[mid] === target){
            return mid;
        }else if (nums[mid] < target){
            left = mid+1;
        }else {
            right = mid-1;
        }
    }

    return -1;
}