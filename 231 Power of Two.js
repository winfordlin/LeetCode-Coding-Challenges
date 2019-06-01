/*
Given an integer, write a function to determine if it is a power of two.
*/

// Math Solution 

const poweroftwo = (n) => {
    return Math.log10(n)/Math.log10(2) % 1 === 0;
}

// Iterative Solution

const poweroftwo = (n) => {
    if (n === 0) return false;
    if (n === 1) return true;

    while (n % 2 === 0) {
        n = n / 2;
    }

    return n === 1;
}