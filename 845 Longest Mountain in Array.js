/*
Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

B.length >= 3
There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
(Note that B could be any subarray of A, including the entire array A.)

Given an array A of integers, return the length of the longest mountain. 

Return 0 if there is no mountain.

Example 1:

Input: [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: [2,2,2]
Output: 0
Explanation: There is no mountain.
Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000
Follow up:

Can you solve it using only one pass?
Can you solve it in O(1) space?
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    //iterate through the array and find peaks, given a peak, expand left index and right index
    //keep track of current peak length, return max peak length

    let i = 1;
    let maxLength = 0;

    while (i < A.length - 1) {
        //find peak 
        let peak = A[i - 1] < A[i] && A[i + 1] < A[i];

        if (!peak) {
            i++;
            continue;
        }

        //expand left
        let leftIdx = i - 2;
        while (leftIdx >= 0 && A[leftIdx] < A[leftIdx + 1]) {
            leftIdx--;
        }

        //expand right
        let rightIdx = i + 2;
        while (rightIdx < A.length && A[rightIdx] < A[rightIdx - 1]) {
            rightIdx++;
        }

        //calculate length
        let currentLength = rightIdx - leftIdx - 1;
        maxLength = Math.max(currentLength, maxLength);

        //continue with rightidx as index
        i = rightIdx;
    }
    return maxLength;

}
