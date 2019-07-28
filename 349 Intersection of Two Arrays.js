/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) { 

    let set = new Set(nums1);
    let set2 = new Set(nums2);
    
    let smaller = set > set2 ? set2:set;
    let larger = set > set2 ? set: set2;

    smaller.forEach((num)=> {
        if (!larger.has(num)) smaller.delete(num);
    });
    
    return Array.from(smaller);
};
