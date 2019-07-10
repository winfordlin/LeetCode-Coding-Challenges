/*
Write a program to find the node at which the intersection of two singly linked lists begins.

Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/


function ListNode(val) {
     this.val = val;
     this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lengthA = length(headA);
    let lengthB = length(headB);

    let difference = Math.abs(lengthA - lengthB);

    for(i = 0; i < difference; i++){
        if (lengthA > lengthB){
            headA = headA.next;
        }else {
            headB = headB.next;
        }
    }

    while (headA !== null && headB !== null){
        if (headA === headB){
            return headA;
        }else {
            headA = headA.next;
            headB = headB.next;
        }
    }
    return null;
};

function length(head){
    let count = 0;
    while (head != null){
        head = head.next;
        count = count + 1;
    }
    return count;
}

