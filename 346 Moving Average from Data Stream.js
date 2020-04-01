/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

/**
 * Initialize your data structure here.
 * @param {number} size
 */

//Circular Array

var MovingAverage = function (size) {

    this.queue = new Array(size).fill(0);

    this.head = -1;
    this.tail = -1;
    this.count = 0;
    this.total = 0;
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    ++this.count;
    this.tail = (this.head + 1) % this.size;
    this.total = this.total - this.queue[this.tail] + val;
    this.head = (this.head + 1) % this.size;
    this.queue[this.head] = val;
    return this.total / Math.min(this.size, this.count);

};

//Deque

var MovingAverage = function (size) {
    this.arr = [];
    this.size = size;
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.arr.push(val);
    this.total += val;
    if (this.arr.length > this.size) {
        const out = this.arr.shift();
        this.total -= out;
    }

    return this.total / Math.min(this.size, this.arr.length);
};


