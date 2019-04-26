/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function ListNode(val) {
        this.val = val;
        this.next = null;
    }

var reverseList = function(head) {
    if (!head || !head.next) return head;
    let cur = head;
    let next, prev = null;

    while(cur){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};