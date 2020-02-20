/*
Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 

Constraints:

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000
*/


//Using mergesort for guaranteed worst case linearithmic runtime of O(nlogn), will update with quicksort implementation which 
// has average case O(nlogn) linearithmic runtime and O(1) constant space

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    //mergesort
    //recursively split then merge
    if (nums.length <= 1) return nums;

    let mid = Math.floor((nums.length) / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, nums.length);

    return merge(sortArray(left), sortArray(right));

};

function merge(left, right) {
    //create an auxilary array then merge using pointers
    let aux = new Array(left.length + right.length);

    let k = 0;
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            aux[k++] = left[i++];
        } else {
            aux[k++] = right[j++];
        }
    }

    while (i < left.length) aux[k++] = left[i++];
    while (j < right.length) aux[k++] = right[j++];

    return aux;
}
