/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let results = [];
  if (candidates.length === 0) return results;

  function recurse(index, tempArr = [], tally = 0) {
    //base cases
    if (tally > target) {
      return;
    }

    if (tally === target) {
      //recurse back up
      results.push(tempArr.slice());
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] < tempArr[tempArr.length - 1]) continue; //skip smaller elems
      //1. choose
      tempArr.push(candidates[i]);
      tally += candidates[i];
      //2. explore
      recurse(index, tempArr, tally);
      //3. backtrack
      tempArr.pop();
      tally -= candidates[i];
    }
  }

  recurse(0, []);
  return results;
};
