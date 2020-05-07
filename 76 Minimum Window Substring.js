/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

ADOBECODEBANC
ADOBEC
DOBECO
OBECOD
BECODE
ECODEB
CODEBA
ODEBAN
DEBANC
EBANC
BANC

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    let letterCount = {};
    //store t letter frequency
    for (let i = 0; i < t.length; i++) {
        letterCount[t[i]] = ++letterCount[t[i]] || 1;
    }

    //keep track of when letterCount all used (match found)
    let counter = t.length
    //slow & fast pointers for expanding window
    let left = 0;
    let right = 0;

    let minLen = Infinity;
    let minStart = 0;

    while (right < s.length) {
        const rChar = s[right];
        //iterate right, if element in t, deincrement counter and letterCount
        if (letterCount[rChar] > 0) counter--;
        if (rChar in letterCount) letterCount[rChar]--;
        right++;

        //if match found, 
        while (counter === 0) {
            //calculate minLen
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            // decrease window left to get min window
            const lChar = s[left];
            if (lChar in letterCount) letterCount[lChar]++;
            if (letterCount[lChar] > 0) counter++;
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"))