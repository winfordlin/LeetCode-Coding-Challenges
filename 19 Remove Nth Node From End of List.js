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
    var nullHead = new ListNode(null);
    nullHead.next = head;
    var p1 = nullHead;
    var p2 = nullHead;
    
    for(var i = 0; i < n + 1; i++)
        p1 = p1.next;
    while(p1 !== null){
        p2 = p2.next;
        p1 = p1.next;
    }
    p2.next = p2.next.next;
    return nullHead.next;
}