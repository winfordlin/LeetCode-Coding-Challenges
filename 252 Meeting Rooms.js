/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
*/

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  if (!intervals.length) return true;
  let intervalSorted = intervals.sort((a, b) => a[0] - b[0]);

  let intervalOutput = intervalSorted[0];
  for (let i = 1; i < intervalSorted.length; i++) {
    if (intervalOutput[1] > intervalSorted[i][0]) {
      return false;
    }
    intervalOutput = intervalSorted[i];
  }
  return true;
};
