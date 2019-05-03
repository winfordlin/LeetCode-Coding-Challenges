/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return -1;
    let s = head;
    let f = head;

    while(s !== f){
        s = s.next;
        if (!f.next || !f.next.next) return null;
        f = f.next.next;
    }

    //we know there is a cycle 
    s = head;

    while(s !== f){
        s = s.next;
        f = f.next;
    }

    return s;
};



