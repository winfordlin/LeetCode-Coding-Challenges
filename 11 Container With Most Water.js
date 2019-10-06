/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

/**
 * @param {number[]} height
 * @return {number}
 */


//Brute Force
//Time: O(n^2) 
//Space: O(1) 

//Find all pairs of two lines, keep the rolling max

var maxArea = function(height) {
    let rollingMax = 0;
    for(let i =0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            let length = Math.min(height[i],height[j]);
            let width = j - i;
            rollingMax = Math.max(rollingMax,length*width);
        }
    }
    return rollingMax;
}


//Two Pointer 
//Time: O(n)
//Space: O(1)

//Initiate two pointers (max width), incrementally reduce the search space by the constraint of 
//water can only be stored in the min of the two heights
var maxArea2 = function(height){
    let rollingMax = 0;
    let l = 0;
    let r = height.length-1;

    while (l < r){
        let length = Math.min(height[l],height[r]);
        let width = r - l;
        rollingMax = Math.max(rollingMax,length*width);
        if (height[l] < height[r]){
            l++;
        }else {
            r--;
        }
    }
    return rollingMax;
}

