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
var middleNode = function(head) {
  const map = new Map();
  let count = 0;

  while(head) {
    map.set(count, head);
    count++
    head = head.next;
  }

  return map.get(Math.floor(count / 2))
};