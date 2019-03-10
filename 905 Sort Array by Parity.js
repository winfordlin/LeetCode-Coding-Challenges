/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000

*/

/*
Solution:
Create two pointers; one on each side of the array
Compare the two array contents of the pointer, if they are negative and positive switch places
If not, continue to traverse towards the middle, exit only when the end is reached
One-Pass and In-Place
Time Complexity: O(N) where N is the length of the array
Space Complexity: O(1) 
*/


const sortArrayByParity = A => {

    let l = 0;
    let r = A.length-1;

    while (l <= r){
    
        if (A[l] % 2 === 0 && A[r] % 2 === 0){
        //++
            l++;
        } else if (A[l] % 2 !== 0 && A[r] % 2 !== 0){
        //--
            r--;
        } else if (A[l] % 2 === 0 && A[r] % 2 !== 0){ 
        //+-
            l++;
            r--;
        } else {
        //-+
            [A[l], A[r]] = [A[r], A[l]];
        }
    }
            return A;
}
