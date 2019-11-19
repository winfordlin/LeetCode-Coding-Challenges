/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return [];

  let intervalSorted = intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  ans.push(intervalSorted[0]);
  for (let i = 1; i < intervalSorted.length; i++) {
    let recentOutput = ans[ans.length - 1];

    if (recentOutput[1] >= intervalSorted[i][0]) {
      recentOutput[1] = Math.max(recentOutput[1], intervalSorted[i][1]);
    } else {
      ans.push(intervalSorted[i]);
    }
  }
  return ans;
};
