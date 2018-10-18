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
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode(0);
  const result = list;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      list.next = l2;
      l2 = l2.next;
    } else {
      list.next = l1;
      l1 = l1.next;
    }
    list.next.next = null;
    list = list.next;
  }

  list.next = l1 === null ? l2 : l1;
  return result.next;
};