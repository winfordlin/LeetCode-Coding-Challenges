/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let prev = null;
  let cur = head;

  while (m > 1) {
    //advance into starting m position
    prev = cur;
    cur = cur.next;
    m--;
    n--;
  }

  //the two pointers that will reconnect the lists
  let con = prev;
  let tail = cur;

  //next pointer
  let next = null;

  while (n > 0) {
    //advance next pointer
    next = cur.next;
    //reverse
    cur.next = prev;
    //advance both
    prev = cur;
    cur = next;
    //decrement n
    n--;
  }

  //adjust the final connection of the before m point (con)
  if (con !== null) {
    con.next = prev;
  } else {
    head = prev;
  }

  //adjust the final connection of the after m point (tail)
  tail.next = cur;
  return head;
};
