/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let returnNum = 0;
    for(let i = 0; i < s.length; i++){
        let freq = {};
        let localmax = 0;
        for(let j = i; j < s.length; j++){
            if (!freq[s[j]]){

                freq[s[j]] = ++freq[s[j]] || 1;
                localmax += 1;
            } else {
                break;
            }
            returnNum = Math.max(localmax,returnNum);
        }
    }
    return returnNum;
};

var lengthOfLongestSubstring_Sliding_Window = function(s){

    let a_pointer = 0;
    let b_pointer = 0;
    let total = 0;

    let set = new Set();

    while (b_pointer < s.length){
        let char = s[b_pointer];
        if (!set.has(char)){
            set.add(s[b_pointer]);
            total = Math.max(total,b_pointer - a_pointer);
            b_pointer++;
        } else {
            set.delete(s[a_pointer]);
            a_pointer++;
        }
    }
    return total;
}