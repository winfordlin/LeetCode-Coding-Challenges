/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter
*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    //split first string; used to compare 
    let ans = A[0].split("");
    for (let i = 1; i < A.length; i++) {
        //update ans
        ans = findCommon(ans, A[i].split(""));
    }
    return ans;
};

var findCommon = function (a, b) {
    //updating ans 
    //if character match, update array without character
    //if no character match, filtered out of ans
    return a.filter(v => {
        let i = b.indexOf(v);
        if (i !== -1) {
            b.splice(i, 1);
            return true
        }
        return false;
    })

}

console.log(commonChars(["cool", "lock", "cook"]))