/*
Smallest Difference

Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one from the first array, one from the second array)
whose absolute difference is closest to zero. The function should return an array containing these two numbers, with the number from the first array in the first 
position. Assume that there will only be one pair of numbers with the smallest difference. 

Sample input [-1,5,10,20,28,3], [26,134,135,15,17]
Sample output [28,26]


[-1,3,5,10,20,28]
[15,17,26,134,135]
*/

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => {return a - b});
    arrayTwo.sort((a,b) => {return a - b});

    let res = [];

    let arr1 = 0;
    let arr2 = 0;
    let difference = Infinity;

    while (arr1 < arrayOne.length -1 && arr2 < arrayTwo.length -1 ){
     
        if (arrayOne[arr1] < arrayTwo[arr2]){
          difference = arrayTwo[arr2] - arrayOne[arr1];
          arr1++;
      } else if (arrayOne[arr1] > arrayTwo[arr2]){
          difference = arrayOne[arr1] - arrayTwo[arr2];
          arr2++;
      } else {
          return [arrayOne[arr1], arrayTwo[arr2]]
      }
    }

    if (difference !== Infinity){
        res.push(arrayOne[arr1]);
        res.push(arrayTwo[arr2]);
        return res;
    }
};

console.log(smallestDifference([-1,5,10,20,28,3],[26,134,135,15,17]))