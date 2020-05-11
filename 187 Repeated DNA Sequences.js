/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    //create a hashmap of substrings that are 10-letters-long
    //iterate through the array using a fixed sliding window
    //get output 

    let hashmap = {};
    let output = [];
    let left = 0;
    let right = 10;

    while (right < s.length + 1) {
        let substring = s.substring(left, right);
        if (hashmap[substring] && hashmap[substring] === 1) {
            output.push(substring)
        }
        hashmap[substring] = hashmap[substring] + 1 || 1;
        left++;
        right++;
    }

    return output;
};
