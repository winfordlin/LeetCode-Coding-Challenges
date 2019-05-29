/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Solution 1: Single Pass
var removeNthFromEnd = function(head, n) {
    if (!head) return null;
    let fast = head, slow = head, i = 0;
    while(i < n) fast = fast.next;
    while (!fast.next) slow = slow.next,fast = fast.next;
    let res = slow.next;
    slow.next = fast;
    return res;  
}