/*
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  //binary search template 3, accessing index's left, index, and index's right
  let l = 0;
  let r = A.length - 1;

  while (l + 1 !== r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) {
      return mid;
    } else if (A[mid - 1] < A[mid + 1]) {
      //up the mountain, continue searching the right side of the mountain
      l = mid;
    } else if (A[mid - 1] > A[mid + 1]) {
      //down the mountain, continue searching the left side of the mountain
      r = mid;
    }
  }
};
