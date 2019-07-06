/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

var findKthLargest = function(nums, k) {
    let low = 0;
    let high = nums.length-1;
    let k = nums.length - k;

    while(low < high){
        let pivot = partition(nums, low, high);
        if (pivot < k){
            low = pivot + 1;
        }else if (pivot > k){
            high = pivot - 1;
        }else {
            break;
        }
    }
    return nums[k];
};




function partition(nums,left,right){

    let i = left - 1;
    let pivot = nums[right];

    for (let j = left; j < right; j++){
        if (nums[j] <= pivot){
            i++;
            swap(nums,j,i)
        }
        
    }
    swap(nums,i+1,right);
    return i + 1;
}


function swap(nums,int1,int2){
    let temp = nums[int1];
    nums[int1] = nums[int2];
    nums[int2] = temp;
}
