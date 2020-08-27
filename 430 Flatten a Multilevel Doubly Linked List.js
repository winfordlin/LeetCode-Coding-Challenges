/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
*/

// Definition for a Node.
function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let ptr = head;
  while (ptr) {
    if (ptr.child) {
      insertAfter(ptr, ptr.child);
    }
    ptr = ptr.next;
  }
  return head;
};

function insertAfter(p1, p2) {
  const next1 = p1.next;
  let next2 = p2;
  while (next2.next) {
    next2 = next2.next;
  }
  p1.next = p2;
  p2.prev = p1;
  p1.child = null;
  next2.next = next1;
  if (next1) {
    next1.prev = next2;
  }
}
