/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */


//Solution 1: beats 99% of runtime
var reverse = function(x) {
    let arr = x.toString().split('');
    let l = 0, r = arr.length-1;

    while(l < r){
        [arr[l],arr[r]] = [arr[r],arr[l]];
        l++;
        r--;
    }

    if (arr[arr.length-1] === '-'){
        if (-parseInt(arr.join('')) < -Math.pow(2,31)){
            return 0;
        } else {
            return -parseInt(arr.join(''));
        }
    } else {
        if (parseInt(arr.join('')) > Math.pow(2,31)){
            return 0;
        }else{
            return parseInt(arr.join(''));
        } 
    }
};

//Solution 2 beats 100% of memory

const reverses = function(x){
    let isNegative = false;
    if (x < 0) isNegative = true;
    let res = 0;
    let y = Math.abs(x);
    while (y > 0){
        let pop = Math.round(y % 10);
        res = res * 10 + pop;
        y = Math.floor(y / 10);
        
   }
   if (res > Math.pow(2,31)) return 0;
   return isNegative ? -res: res; 
    
}

console.log(reverses(321))
