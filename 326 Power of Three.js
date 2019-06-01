/*
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/

//Solution 1: Iterative

const powerofthree = (n) => {
    if (n === 0) return false;
    if (n === 1) return true;

    while(n % 3 === 0){
        n = n / 3;
    }
    
    return n === 1;
}


//Solution 2: Recursive


//Solution 3: Math Change of Base Formula 

const powerofthree3 = (n) => {
    return Math.log10(n)/Math.log10(3) % 1 === 0;
}







console.log(powerofthree2(2))
