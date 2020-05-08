/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    //expanding sliding window
    let left = 0;
    let right = 0;
    let max = 0;
    let freq = {};
    let numUnique = 0;

    while (right < s.length) {
        //expand until reaching k
        if (freq[s[right]] > 0) {
            freq[s[right]]++;
        } else {
            numUnique++;
            freq[s[right]] = 1;
        }

        //deincrement window until less than k
        while (numUnique > k) {
            //pop left window
            freq[s[left]]--;
            //reset counter numUnique
            if (freq[s[left]] === 0) {
                numUnique--;
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};