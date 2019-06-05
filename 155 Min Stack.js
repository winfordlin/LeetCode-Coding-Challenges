/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.container = [];
    this.MinStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.container.push(x);
    if (this.MinStack.length === 0 || x < this.MinStack[this.MinStack.length-1]){
        this.MinStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.container.pop();
    if (x === this.MinStack[this.MinStack.length-1]){
        this.MinStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.container[this.container.length-1];
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.MinStack[this.MinStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */



