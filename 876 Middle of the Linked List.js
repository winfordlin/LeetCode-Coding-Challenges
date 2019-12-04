/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:

The number of nodes in the given list will be between 1 and 100.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  //if only one node return node

  //create a slow pointer node
  //create a fast pointer node

  //loop through the linked list
  //increment slow pointer by one
  //increment the fast pointer by one - check if .next is null if so return slow pointer
  //increment the fast pointer by another - check if .next is null if so return slow pointer

  if (!head.next) return head;

  let slow = new ListNode();
  let fast = new ListNode();

  slow.next = head;
  fast.next = head;

  while (true) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next;
    } else {
      return slow;
    }

    if (fast.next) {
      fast = fast.next;
    } else {
      return slow;
    }
  }
};
