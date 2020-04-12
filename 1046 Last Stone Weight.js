/*
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
    class PriorityQueue {
        constructor(comparator) {
            this.arr = [];
            this.comparator = comparator;
        }

        enqueue(val) {
            this.arr.push(val);
            moveUp(this.arr, this.arr.length - 1, this.comparator);
        }

        dequeue() {
            const output = this.arr[0];
            this.arr[0] = this.arr[this.arr.length - 1];
            this.arr.pop();
            moveDown(this.arr, 0, this.comparator);
            return output;
        }

        peekOr(defaultValue) {
            return this.arr.length ? this.arr[0] : defaultValue;
        }

        get length() {
            return this.arr.length;
        }
    }

    function moveUp(arr, i, comparator) {
        const p = Math.floor((i - 1) / 2);
        const isValid = p < 0 || comparator(arr[p], arr[i]);
        if (!isValid) {
            [arr[i], arr[p]] = [arr[p], arr[i]];
            moveUp(arr, p, comparator);
        }
    }

    function moveDown(arr, i, comparator) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        const isValid =
            (left >= arr.length || comparator(arr[i], arr[left])) &&
            (right >= arr.length || comparator(arr[i], arr[right]));
        if (!isValid) {
            const next = right >= arr.length || comparator(arr[left], arr[right]) ? left : right;
            [arr[i], arr[next]] = [arr[next], arr[i]];
            moveDown(arr, next, comparator);
        }
    }

    let maxHeap = new PriorityQueue((a, b) => a > b);
    for (let i = 0; i < stones.length; i++) {
        maxHeap.enqueue(stones[i]);
    }

    while (maxHeap.length > 1) {
        let x = maxHeap.dequeue();
        let y = maxHeap.dequeue();
        if (x > y) {
            maxHeap.enqueue((x - y))
        }
    }

    return maxHeap.peekOr(0);

};
