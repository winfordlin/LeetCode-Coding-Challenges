/*
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

 

Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
 

Constraints:

1 <= arr1.length, arr2.length, arr3.length <= 1000
1 <= arr1[i], arr2[i], arr3[i] <= 2000
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  let res = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    let max = Math.max(arr1[i], arr2[j], arr3[k]);
    if (arr1[i] === max && arr2[j] === max && arr3[k] === max) {
      i++;
      j++;
      k++;
      res.push(max);
    } else {
      while (arr1[i] < max) i++;
      while (arr2[j] < max) j++;
      while (arr3[k] < max) k++;
    }
  }

  return res;
};
