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

var isPalindrome = function(head) {
  if (!head || !head.next) return true;

  //get middle
  let headPtr = head;
  let slow = head;
  let fast = head;
  let length = 1;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
    length++;

    if (fast.next) {
      fast = fast.next;
      length++;
    }
  }

  // odd or even cases

  let firstHalf = headPtr;
  let secondHalf = slow;

  if (length % 2 === 0) {
    for (let i = 1; i < length / 2; i++) {
      headPtr = headPtr.next;
    }
    headPtr.next = null;
  } else {
    for (let i = 1; i < Math.floor(length / 2); i++) {
      headPtr = headPtr.next;
    }
    headPtr.next = null;
    secondHalf = secondHalf.next;
  }

  //reverse first half and compare

  firstHalf = reverseLinkedList(firstHalf);

  while (firstHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};

let reverseLinkedList = function(head) {
  let prev = null;
  let cur = head;
  let next = null;

  while (cur) {
    //cache the next
    next = cur.next;
    //reverse
    cur.next = prev;
    //advance cur and next
    prev = cur;
    cur = next;
  }
  return prev;
};
