/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

//use quickselect algorithm to return the kth closest, use that as pivot so only recurse on one side, return a slice of the first Kth
var kClosest = function (points, K) {
    sort(points, K, 0, points.length - 1);
    return points.slice(0, K);
};

//if pivot is less than K, has not been partitioned, pivot - 1 is just randomizing r (end) and not significant
function sort(points, K, l, r) {
    if (l >= r) return;
    let pivot = partition(points, l, r);
    if (pivot > K) {
        sort(points, K, l, pivot - 1);
    } else if (pivot < K) {
        sort(points, K, pivot + 1, r);
    } else {
        return
    }
}

function partition(points, l, r) {
    //i is placeholder (sandwich)
    //j is scanner
    //r is pivot
    let i = l;
    let j = l;

    while (j < r) {
        if (distance(points[j]) < distance(points[r])) {
            [points[i], points[j]] = [points[j], points[i]];
            i++;
        }
        j++;
    }
    [points[i], points[r]] = [points[r], points[i]];
    return i;
}

//euclidean formula
function distance(coord) {
    return (coord[0] ** 2) + (coord[1] ** 2);
}
