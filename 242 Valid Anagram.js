/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

//Solution 1

const isAnagram = (s,t) => {
    if (s.length !== t.length) return false;
    let res = new Array(26);
    res.fill(0);
    
    for(let i = 0; i < s.length; i++){ 
        res[s.charAt(i).charCodeAt(0) - 97]++;
        res[t.charAt(i).charCodeAt(0) - 97]--;
    }

    console.log(res);
    for(let i = 0; i < res.length; i++){
        if (res[i] !== 0){
            return false;
        }
    }
    return true;
}
