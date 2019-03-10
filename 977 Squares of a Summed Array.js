/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/


//Solution
//Brute Force

/*
create new array and populate it with given array squared, then sort 
Time Complexity: O(NlogN)
Space Complexity: O(N)
*/
const sortedSquares = A => {
    const newArray = [];

    for(let i=0; i<A.length;i++){
        newArray[i] = Math.pow(A[i],2)
    }

    return newArray.sort(compare = (a,b) => a - b)

}

//Two Pointers
/*
create a new array
track the given array with pointers to the end called left and right
Loop through the given array in one-pass by incrementing/decrementing the left and right pointers
Compare the absolute value of the given array[left] and given array[right]
Place the greater value of the two at the end of new array, increment/deincrement left and right accordingly
Return new array
Time Complexity: O(N)
Space Complexity: O(N)
*/
const sortedSquaresTwo = A => {
    const newArray = [];
    let left = 0;
    let right = A.length-1;

    while(left <= right){
        const leftSide = Math.abs(A[left]);
        const rightSide = Math.abs(A[right]);

        if (leftSide > rightSide){
            newArray[right-left] = leftSide * leftSide;
            left++; 
        } else {
            newArray[right-left] = rightSide * rightSide;
            right--;
        }
    }
    return newArray;
}

