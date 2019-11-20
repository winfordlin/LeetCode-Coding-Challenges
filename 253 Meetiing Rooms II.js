/*
/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: 2

Example 2:

Input: [[7,10],[2,4]]
Output: 1

*/

var canAttendMeetings = function(intervals) {
  let start = [];
  let end = [];

  for (let i = 0; i < intervals.length; i++) {
    start.push(intervals[i][0]);
    end.push(intervals[i][1]);
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let sPointer = 0;
  let ePointer = 0;

  let minNumRooms = 0;
  let numberAvailable = 0;

  while (ePointer < end.length) {
    if (start[sPointer] < end[ePointer]) {
      if (numberAvailable) {
        numberAvailable--;
      } else {
        minNumRooms++;
      }
      sPointer++;
    } else {
      numberAvailable++;
      ePointer++;
    }
  }
  return minNumRooms;
};
