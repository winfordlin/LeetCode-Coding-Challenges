/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
//7-3-1 = 4 
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

//Solution 1: Naive Solution - Time O(n+k) Space O(1) 
const rotate = (nums,k) => {
   for(let i = 0; i < k; i++){
        let temp = 0;
        let last = nums[nums.length-1]
    for(let i = nums.length-1; i >= 0; i--){
        temp = nums[i-1];
        nums[i] = temp;
        if (nums[0] === undefined){
             nums[0] = last;
            }   
        }
   }
}

//Solution 2: Copy Over Array Solution - Time O(n) Space O(n)
const rotate2 = (nums,k) => {

    let pivot = nums.length - (k % nums.length);
    let secondpart = nums.slice(pivot,nums.length);
    let firstpart = nums.slice(0,pivot);
    let copy  = secondpart.concat(firstpart);
    
    for(let i = 0; i < nums.length; i++){
        nums[i] = copy[i];
    }
}



console.log(rotate2([1,2,3,4,5,6,7],3))
