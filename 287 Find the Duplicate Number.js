/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    //Floyd's Cycle Detection
    //Slow (1 step) and Fast Pointer (2 step)
    let head = nums[0];
    let slow = nums[head];
    let fast = nums[nums[head]];

    //Find entrance of cycle by iterating slow pointer and fast pointer one step ahead of slow pointer until they both meet
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    //Found entrance of cycle, reset fast pointer to head
    fast = head;

    //Find cycle by iterating both fast and slow one step each, fast from head and slow from entrance of cycle
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow || -1;

};