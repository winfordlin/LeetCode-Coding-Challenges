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
    this.tail = null;
    
};

var ListNode = function(val) {
    this.val = val;
    this.next = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let cur = this.head;
    let curIndex = index;
    while(cur){
        if (curIndex === 0){
            return cur.val;
        }
        curIndex--;
        cur = cur.next;
    }
    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let addHead = new ListNode(val);
    //no head;
    if (this.head === null){
        this.head = addHead;
        this.tail = addHead;
    //existing head
    }else {
        addHead.next = this.head;
        this.head = addHead;
        
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let addTail = new ListNode(val);
    //if no head
    if (this.head === null){
        this.head = addTail;
        this.tail = addTail; 
    //existing head
    }else {
        let cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        cur.next = addTail;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */


MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    let addIndex = new ListNode(val);
    let cur = this.head;
    let curIndex = index - 1;

    //add a head
    if (curIndex === -1){
        this.addAtHead(val)
    }

    
    while(cur){
        if (curIndex === 0){
            let temp = cur.next;

            cur.next = addIndex;
            addIndex = temp;
            if (temp === null){
                this.tail === addIndex;
            }
        }
        cur = cur.next;
        curIndex--;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let cur = this.head;
    let curIndex = index;

    //delete head
    if (cur.next && index === 0){
        this.head = cur.next;
    //delete body
    }else {
        while (cur.next){
            curIndex--;
            if (curIndex === 0){
                cur.next = cur.next.next;
            }
            cur = cur.next;
        }
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

 let test = new MyLinkedList();
 test.addAtHead(3);
 test.addAtHead(2);
 test.addAtHead(1);
 test.addAtTail(4);
 


 let cur = test.head;
 while(cur){
     console.log(cur.val);
     cur = cur.next;
 }

 console.log(test.get(4));

