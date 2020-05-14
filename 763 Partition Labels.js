/*
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:

S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    //save the last index of char instance
    let output = [];
    let last = {};

    for (let i = 0; i < S.length; i++) {
        last[S[i]] = i;
    }

    let start = 0;
    let end = 0;

    //iterate through the string and find the last instance of each
    //find the max last of these characters, return number of chars and continue
    for (let i = 0; i < S.length; i++) {
        //record max last
        end = Math.max(end, last[S[i]]);
        //if reached last
        if (i === end) {
            output.push(end - start + 1);
            start = i + 1;
        }
    }

    return output;
};
