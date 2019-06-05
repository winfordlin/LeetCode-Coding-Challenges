/*
Design a max stack that supports push, pop, top, peekMax and popMax.

 

push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.
 

Example 1:

MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5
 

Note:

-1e7 <= x <= 1e7
Number of operations won't exceed 10000.
The last four operations won't be called when stack is empty.
*/

var MaxStack = function() {
    this.container = [];
    this.MaxStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.container.push(x);
    if (this.MaxStack.length === 0 || x >= this.MaxStack[this.MaxStack.length]){
        this.MaxStack.push(x);
    }
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function() {
    let x = this.container.pop();
    if (x === this.MaxStack[this.MaxStack.length]){
        this.MaxStack.pop();
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.container[this.container.length-1];
};

/**
 * @return {number}
 */
MaxStack.prototype.getMax = function() {
    return this.MaxStack[this.MaxStack.length-1];
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMax()
 */



