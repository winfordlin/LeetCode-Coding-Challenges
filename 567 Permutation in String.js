/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 

Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    //sliding window fixed
    //keep a charFreq of s1 substring
    //slide through s2 checking for charFreq, pop left, push right window

    let left = 0;
    let right = 0;
    let counter = s1.length;
    let freq = {};

    //build charFreq 
    for (let i = 0; i < s1.length; i++) {
        freq[s1[i]] = freq[s1[i]] + 1 || 1;
    }

    //build initial fixed window size
    while (right < s1.length) {
        if (freq[s2[right]] > 0) counter--;
        if (s2[right] in freq) freq[s2[right]]--;
        right++;
    }

    if (counter === 0) return true;


    //sliding window fixed
    while (right < s2.length) {
        //pop left
        if (s2[left] in freq) freq[s2[left]]++;
        if (freq[s2[left]] > 0) counter++;
        left++;



        //push right
        if (freq[s2[right]] > 0) counter--;
        if (s2[right] in freq) freq[s2[right]]--;
        right++;

        if (counter === 0) return true;

    }
    return false;
};
