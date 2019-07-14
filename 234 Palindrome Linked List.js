/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/


function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 121  2     2
 //1-2->3->4->5
// 1
 //1-2->3->4
var isPalindrome = function(head) {
    let prev = new ListNode(null);
    prev.next = head;
    let p1 = head;
    let middle = head;
    let p2 = head;

    while (p2.next && p2.next.next){
        prev = prev.next
        middle = middle.next;
        p2 = p2.next.next;
    }

    if (p2.next){
        middle.next = null;
    } else {
        p2 = middle.next;
        prev.next = null;
    }

    p2 = reverse(p2);

    while(p1.next && p2.next){
        if (p1.val != p2.val){
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;

};

function reverse(head){
    if (!head || !head.next){
        return head;
    }

    let cur = head;
    let next = null;
    let prev = null;

    while(cur){
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}

let one = new ListNode(1);
let two = new ListNode(2);
let three = new ListNode(2);
let four = new ListNode(1);
//let five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
//four.next = five;

console.log(isPalindrome(one))