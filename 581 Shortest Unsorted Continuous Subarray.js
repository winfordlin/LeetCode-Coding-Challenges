/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    //3 steps: 
    //1. check for unsorted area
    //2. once at unosrted index, expand search area for lowest value, higher value "is endindex"
    //3. iterate through array, find the number greater than minvalue, which becomes start index

    let highestVal = 0;
    let highestIdx = 0;
    let endIdx = -1;
    let startIdx = -1;
    let lowestSeen = Infinity;

    if (nums.length < 2) return 0;

    //step 1
    let i = 1;
    while (i < nums.length){
        if (nums[i-1] === nums[i]){
             i++;
            continue;
        }
        if (nums[i-1] > nums[i]){
            highestIdx = i - 1;
            highestVal = nums[i-1];
            break;
        }
        i++;
    }

    if (i === nums.length) return 0;

    //step 2
    for(let i = highestIdx + 1; i < nums.length; i++){
        if (nums[i] < highestVal){
            lowestSeen = Math.min(lowestSeen,nums[i])
            endIdx = i;
        }else {
            highestVal = nums[i];
        }
    }

    //step 3
    for(let i = 0; i < nums.length; i++){
        if (nums[i] > lowestSeen){
            startIdx = i;
            break;
        }
    }

    return endIdx - startIdx + 1;
};
