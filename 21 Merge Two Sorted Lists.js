/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode;
    l3.next = l1;
    let list1 = l1;
    let list2 = l2;
    while(list1 && list2){
        if (list2.val <= list1.val){
            list2.next = list1
        }
    }

}






















/*

    let l3 = new ListNode();
    let cur = l3;

    while(l1 || l2){
        if (l1.val < l2.val){
            cur.next = l1;
            l1 = l1.next;
        }else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return l3.next;
};


*/