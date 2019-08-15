/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. 

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0;

    let l = 0;
    let r = height.length-1;
    let leftmax = 0;
    let rightmax = 0;
    let total = 0;

    while (l <= r){
        if (leftmax < rightmax){
            if (height[l] > leftmax){
                leftmax = height[l];
            }else {
                total += leftmax-height[l];
            } 
            l++;
        } else {
            if (height[r] > rightmax){
                rightmax = height[r];
            }else {
                total += rightmax-height[r];
            } 
            r--;
        }
    }
    return total;
};
