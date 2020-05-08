/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:

Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
Example 2:

Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
    //expanding sliding window
    let left = 0;
    let right = 0;
    let numUnique = 0;
    let freq = {};
    let max = 0;

    while (right < s.length) {
        //expand right window until reach limit of s
        if (freq[s[right]] > 0) {
            freq[s[right]]++;
        } else {
            numUnique++;
            freq[s[right]] = 1;
        }
        //deincrement left window until less than limit of s
        if (numUnique > 2) {
            //pop left
            freq[s[left]]--;
            if (freq[s[left]] === 0) {
                numUnique--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1)
        right++;
    }
    return max;
};
