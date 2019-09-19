/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */


/*
Brute Force Methods
*/



// Recursive Approach- Time Complexity: O(2^n) Space Complexity: O(n)
const climbStairs_Recursive = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return climbStairs_Recursive(n-2) + climbStairs_Recursive(n-1);
}


/*
Dynamic Programming Methods
*/

// Top Down Recursive Approach With Memoization - Time Complexity: O(n) Space Complexity: O(n)
const climbStairs_Memoization = (n) => {
    let memoTable = new Array(n+1);
    memoTable[1] = 1;
    memoTable[2] = 2;
    return climbHelp(n,memoTable);
}

const climbHelp = (n,memoTable) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (memoTable[n] > 0) return memoTable[n];

    memoTable[n] = climbHelp(n-2,memoTable) + climbHelp(n-1,memoTable);

    return memoTable[n];
}

// Bottom Up Tabulation Approach - Time Complexity: O(n) Space Complexity: O(n)
const climbStairs_Tabulation = (n) => {
    let memoTable = new Array(n+1);
    memoTable[1] = 1;
    memoTable[2] = 2;

    for(let i = 3; i <= n; i++){
        memoTable[i] = memoTable[i-2] + memoTable[i-1];
    }

    return memoTable[n];
}

// Bottom Up Tabulation with Local Variables - Time Complexity: O(n) Space Complexity: O(1)
const climbStairs_Iteration = (n) => {
    let a = 1;
    let b = 2;
    let c;

    if (n === 1) return a;
    if (n === 2) return b;

    for(let i = 3; i <= n; i++){
        c = a + b;
        [a,b] = [b,c];
    }

    return c;
}





//  Runtime O(n^2) Spacetime O(n)

