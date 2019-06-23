/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Recursive Solution - Time Limit Exceeded

var coinChange1 = function(coins, amount) {
    if (amount === 0) return 0;
    let minNumCoins = Infinity;
    for(let i = 0; i < coins.length; i++){
        if (amount >= coins[i]){
            let numCoins = coinChange(coins,amount-coins[i]);
            if (numCoins + 1 < minNumCoins){
                minNumCoins = numCoins + 1;
                
            }
        }
        
    }

    if (minNumCoins === Infinity || minNumCoins === 0){
        return -1;
    }
    return minNumCoins;
};

//DP 

var coinChange = function(coins, amount){
    let coinArray = new Array(coins.length).fill(Infinity);
    coinArray[0] = 0;

    for(let i = 0; i < amount; i++){
        for(let j = 0; j < coins.length;j++){
            if (i >= coins[j]){
                coinArray[i] = Math.min(coinArray[i],coinArray[i-coins[j]]+1);
            }
        }
    }
    return coinArray[amount] > amount ? -1 : coinArray[amount];
}

console.log(coinChange([6,5,1],4));