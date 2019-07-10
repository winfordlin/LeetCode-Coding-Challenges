/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

*/

function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null;
    let nullHead = new ListNode(null);
    nullHead.next = head;

    let prev = nullHead;

    while (head != null){
        if (head.val === val){
            prev.next = head.next;
            head = prev.next;
        }else {
            head = head.next;
            prev = prev.next;
        }
    }
    return nullHead.next;
};

