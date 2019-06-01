/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?
*/

//Iterative

const poweroffour1 = (n) => {
    if (n === 0) return false;
    if (n === 1) return true;

    while (n % 4 === 0){
        n = n / 4;
    }
    return n === 1;
}

//Math Change of Base Formula

const poweroffour = (n) => {
    return Math.log10(n)/Math.log10(4) % 1 === 0;
}

