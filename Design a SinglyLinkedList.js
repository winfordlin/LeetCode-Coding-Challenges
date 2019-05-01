//Learn Series

/*
Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
addAtTail(val) : Append a node of value val to the last element of the linked list.
addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.
Example:

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3
Note:

All values will be in the range of [1, 1000].
The number of operations will be in the range of [1, 1000].
Please do not use the built-in LinkedList library.
*/

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this.length) return -1;
    let cur = this.head, i = 0;
    while(i !== index) i++, cur = cur.next;
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let addHead = {val:val};
    addHead.next = this.head;
    this.head = addHead;
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (!this.length){
        this.addAtHead(val)
        return;
    }
    let cur = this.head;
    while(cur.next) cur = cur.next;
    let addTail = {val:val};
    addTail.next = null;
    cur.next = addTail;
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */


MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index>this.length) return;
	if(index===this.length){
		this.addAtTail(val);
		return;
	}
	if(index===0){
		this.addAtHead(val);
		return;
	}
	let i=0, cur = this.head;
	while(i<index-1) i++,  cur = cur.next;
	let prev = cur, next = cur?cur.next:null, newNode = {val:val};
	newNode.next = next;
	prev.next = newNode;
	this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length) return;
    let cur = this.head, i = 0;

    while(i < index-1) i++, cur = cur.next;
    let prev = cur, next = cur.next.next;
    prev.next = next;
    this.length--;
};
