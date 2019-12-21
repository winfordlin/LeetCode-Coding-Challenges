/*
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  //keep a stack of un"seen" temperatures
  //stack should be decending order from bottom to top
  let stack = [];
  let ans = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      //if current temperature bigger, continously compare to top of stack and place the index difference (days) into return array
      let j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }
  return ans;
};
