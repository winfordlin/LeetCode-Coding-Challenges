/*
Given a string S, return the number of substrings of length K with no repeated characters.

 

Example 1:

Input: S = "havefunonleetcode", K = 5
Output: 6
Explanation: 
There are 6 substrings they are : 'havef','avefu','vefun','efuno','etcod','tcode'.
Example 2:

Input: S = "home", K = 5
Output: 0
Explanation: 
Notice K can be larger than the length of S. In this case is not possible to find any substring.
 

Note:

1 <= S.length <= 10^4
All characters of S are lowercase English letters.
1 <= K <= 10^4
*/

/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (S, K) {
    //Constraint 1: Substring must be K-length -> Fixed Sliding Window (move left and right at same pace after building initial window)
    //Constraint 2: Substring must be all unique -> Use hashtable and counter to store frequency / pop left window freq & push right window
    //For Max Optimal Runtime (not below), use Fast/Catchup Fixed Sliding Window 
    //ie. "haveff" K = 5, will run through "aveff$", "veff$$", "eff$$$", "ff$$$$", all of which don't satisfy the K-unique constraint, we should just
    //shift left to last position of repeated character

    let left = 0;
    let right = 0;
    let freq = {};
    let counter = 0;
    let numOfKLenSubstr = 0;

    //invalid 
    if (S.length < K) return 0;

    //build initial window of size K
    while (right < K) {
        if (freq[S[right]]) {
            freq[S[right]] = freq[S[right]] + 1;
        } else {
            counter++;
            freq[S[right]] = 1;
        }
        right++;
    }

    if (counter === K) numOfKLenSubstr++;
    //iterate through rest of string length

    while (right < S.length) {
        //decrease left window
        if (S[left] in freq) freq[S[left]]--;
        if (freq[S[left]] === 0) counter--;

        left++;

        //increase right window
        if (freq[S[right]]) {
            freq[S[right]] = freq[S[right]] + 1;
        } else {
            counter++;
            freq[S[right]] = 1;
        }

        if (counter === K) numOfKLenSubstr++;

        right++;
    }

    return numOfKLenSubstr;
};

console.log(numKLenSubstrNoRepeats('havefz', 5));
console.log(numKLenSubstrNoRepeats('havffa', 5));