/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Note:

The total number of elements of the given matrix will not exceed 10,000.
*/

const diagonal = (array) => {
    // if i+j === even go up 
    // if i+j === odd go down
    // if reached top, bottom, left, or right
    if (array.length < 1 || array[0].length < 1){
        return [];
    }
    let i = 0, j = 0, m = array[0].length; n = array.length;
    let res = [];

    for(let k = 0; k < m * n; k++){
        res.push(array[i][j])
        if ((i + j) % 2 === 0){//even go up
            if (j === (n - 1)){
                i++;
            } else if (i === 0){
                j++;
            } else {
                i--;
                j++;
            }    
        }else {//go down
            if (i === n-1) {
                j++;
            } else if (j === 0){
                i++;
            } else {
                i++;
                j--;
            }
        }
    }
    return res;
}
