/*
Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s. 

Example 1:

Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation: 
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
Example 2:

Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation: 
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    //Constraint 1: Contigous SubArray Containing Only 1s -> Expanding Right Window
    //Constraint 1.5: Using K Flips to Switch 0s to 1s -> Keep kCount
    //Constraint 2: Get Longest Subarray -> Decreasing Left Window until kCount is less than K
    let maxOnes = 0;
    let left = 0;
    let right = 0;
    let oneCount = 0;
    let kCount = 0;

    while (right < A.length) {
        //expand right window
        if (A[right] === 0) {
            kCount++;
        }
        oneCount++;

        //if reached limit of kCount
        while (kCount > K) {
            if (A[left] === 0) {
                kCount--;
            }
            oneCount--;
            left++;
        }
        maxOnes = Math.max(maxOnes, oneCount);
        right++;

    }

    return maxOnes;
};
