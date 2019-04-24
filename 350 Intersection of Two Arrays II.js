/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Solution 1
var intersect = function(nums1, nums2) {
    greater = 0;
    lesser = 0;
    lesserobj = {};
    res = [];

    if (nums1 > nums2){
        greater = nums1;
        lesser = nums2;
    }else {
        greater = nums2;
        lesser = nums1;
    }

    for(let i = 0; i < lesser.length; i++){
        lesserobj[lesser[i]] = ++lesserobj[lesser[i]] || 1;
    }

    for(let i = 0; i < greater.length; i++){
        if (lesserobj.hasOwnProperty(greater[i].toString()) && lesserobj[greater[i]] !== 0){
            res.push(greater[i]);
            lesserobj[greater[i]]--;
        }
    }
    return res;
};
