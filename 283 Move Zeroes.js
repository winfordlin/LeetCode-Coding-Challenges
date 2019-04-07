/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
 
//Solution 1 O(N^2)
 const moveZeroes = (nums) => {
     for(let i = 0; i < nums.length; i++){
         for(let j = i + 1; j < nums.length;j++){
             if (nums[i] === 0){
                 let temp = nums[i]
                 nums[i] =  nums[j];
                 nums[j] = temp;
             }

         }
     }
     return nums;
 }

 //Solution 2: O(N^2)

 const moveZeroes1 = (nums) => {
    for(var i = nums.length;i--;){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0);
        }
    }
    return nums;
 }

