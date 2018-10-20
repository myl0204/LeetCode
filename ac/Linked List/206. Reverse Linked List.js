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

// recursively
var reverseList = function(head) {
  function rotate2Lists(l1, l2) {
    if (l1 === null) return l2;
    let next = l1.next; 
    l1.next = l2;
    l2 = l1; 
    l1 = next;
    if (l1 !== null) {
      return rotate2Lists(l1, l2)
    }
    return l2;
  }
  return rotate2Lists(head, null);
};

// iteratively
var reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let result = null, current = head, next;

  while (current) {

    next = current.next;

    current = next;

    current.next = result;

    result = current;
  }

  return result;
}