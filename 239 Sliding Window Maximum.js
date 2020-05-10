/*
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Follow up:
Could you solve it in linear time?

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


//output-restricted deque for storing max value in front (double ended queue), new input max clears entire deque
//clear           less than  
//I  ->          <- I
//O <- [         ]
//     F         B
var maxSlidingWindow = function (nums, k) {
    let deque = [];
    let right = 0;
    let output = [];

    while (right < nums.length) {
        //clear
        while (deque.length && nums[right] > deque[deque.length - 1]) deque.pop();
        deque.push(nums[right]);

        //iterate over window of size k
        let left = right + 1 - k;
        if (left >= 0) {
            output.push(deque[0]);
            if (nums[left] === deque[0]) deque.shift();
        }
        right++;
    }
    return output;
};
